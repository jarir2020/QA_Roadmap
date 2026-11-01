# Demo: Registration + Login + Dashboard (PHP + HTMX + CSS)

> Simple, educational app to practice writing a **test strategy** for auth flows.

## What you will get
- **Registration page** (creates a user in MySQL)
- **Login page** (authenticates and stores session)
- **Dashboard page** (shows logged-in user)
- Uses **HTMX** for partial updates (forms submit without full-page reload)
- Minimal **CSS** styling

---

## Quick prerequisites
- PHP 8.x installed
- MySQL 8.x installed
- Web server with PHP support (e.g., `php -S` for local testing)
- Composer optional (not required for this demo)

---

## Database setup (MySQL)
Use the credentials you provided:
- host: `localhost`
- port: `3306`
- username: `root`
- password: `root`

### 1) Create a database
```sql
CREATE DATABASE IF NOT EXISTS sqa_demo_auth;
USE sqa_demo_auth;
```

### 2) Create users table
```sql
CREATE TABLE IF NOT EXISTS users (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

### 3) Insert a demo user
> Password for the demo user is `Password123!` (hashed at insert time)

```sql
-- Create demo password hash in SQL using SHA2 just as a placeholder.
-- NOTE: This demo app uses PHP password_hash(), so instead we recommend using the app to create users.
-- If you still want SQL-only insertion, create a hash via PHP and paste it here.
```

**Recommended:** register the demo user using the app (it avoids hash mismatch).

---

## Project structure
Create a folder under your Phase1 folder, for example:

```text
Phase1/AuthDemo/
  public/
    index.php
    register.php
    login.php
    dashboard.php
    logout.php
    assets/style.css
  src/
    db.php
    auth.php
  .env.example
```

To keep it simple, you can implement **everything** as plain PHP files under `public/`.

---

## Application code
Below is a complete minimal implementation.

### 1) `public/index.php`
```php
<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/auth.php';

session_start();

if (isset($_SESSION['user_id'])) {
  header('Location: /dashboard.php');
  exit;
}

header('Location: /login.php');
exit;
```

---

### 2) `src/db.php`
```php
<?php
declare(strict_types=1);

function db(): PDO {
  static $pdo = null;
  if ($pdo instanceof PDO) return $pdo;

  $host = 'localhost';
  $port = '3306';
  $dbName = 'sqa_demo_auth';
  $user = 'root';
  $pass = 'root';

  $dsn = "mysql:host={$host};port={$port};dbname={$dbName};charset=utf8mb4";
  $pdo = new PDO($dsn, $user, $pass, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  ]);

  return $pdo;
}
```

---

### 3) `src/auth.php`
```php
<?php
declare(strict_types=1);

require_once __DIR__ . '/db.php';

function require_login(): void {
  session_start();
  if (!isset($_SESSION['user_id'])) {
    header('Location: /login.php');
    exit;
  }
}

function current_user(): ?array {
  if (!isset($_SESSION['user_id'])) return null;
  $stmt = db()->prepare('SELECT id, email, is_active FROM users WHERE id = ?');
  $stmt->execute([$_SESSION['user_id']]);
  $u = $stmt->fetch();
  return $u ?: null;
}

function register_user(string $email, string $password): array {
  $email = trim(strtolower($email));

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    return ['ok' => false, 'error' => 'Invalid email format'];
  }

  if (strlen($password) < 8) {
    return ['ok' => false, 'error' => 'Password must be at least 8 characters'];
  }

  $hash = password_hash($password, PASSWORD_DEFAULT);

  try {
    $stmt = db()->prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
    $stmt->execute([$email, $hash]);
    return ['ok' => true];
  } catch (Throwable $e) {
    // Unique email violation
    return ['ok' => false, 'error' => 'Email already registered'];
  }
}

function login_user(string $email, string $password): array {
  $email = trim(strtolower($email));

  $stmt = db()->prepare('SELECT id, email, password_hash, is_active FROM users WHERE email = ?');
  $stmt->execute([$email]);
  $u = $stmt->fetch();

  // Avoid user enumeration:
  // Always return a generic error for invalid credentials.
  if (!$u || !password_verify($password, $u['password_hash']) || (int)$u['is_active'] !== 1) {
    return ['ok' => false, 'error' => 'Invalid email or password'];
  }

  $_SESSION['user_id'] = (int)$u['id'];
  return ['ok' => true];
}

function logout_user(): void {
  session_start();
  $_SESSION = [];
  if (ini_get('session.use_cookies')) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
      $params['path'], $params['domain'], $params['secure'], $params['httponly']);
  }
  session_destroy();
}
```

---

### 4) `public/register.php`
```php
<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/auth.php';

session_start();

$mode = $_SERVER['REQUEST_METHOD'] === 'POST' && ($_SERVER['HTTP_HX_REQUEST'] ?? '') === 'true';

if ($mode) {
  $email = (string)($_POST['email'] ?? '');
  $password = (string)($_POST['password'] ?? '');

  $res = register_user($email, $password);

  header('Content-Type: text/html; charset=utf-8');

  if (!$res['ok']) {
    echo '<div class="error">' . htmlspecialchars($res['error'], ENT_QUOTES) . '</div>';
    exit;
  }

  echo '<div class="success">Registration successful. <a href="/login.php">Login</a></div>';
  exit;
}

?><!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Register</title>
  <script src="https://unpkg.com/htmx.org@1.9.12"></script>
  <link rel="stylesheet" href="/assets/style.css" />
</head>
<body>
  <div class="container">
    <h1>Register</h1>

    <div id="form-result"></div>

    <form
      hx-post="/register.php"
      hx-target="#form-result"
      hx-swap="innerHTML"
    >
      <label>Email</label>
      <input type="email" name="email" required />

      <label>Password</label>
      <input type="password" name="password" minlength="8" required />

      <button type="submit">Create account</button>
    </form>

    <p class="muted">Already have an account? <a href="/login.php">Login</a></p>
  </div>
</body>
</html>
```

---

### 5) `public/login.php`
```php
<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/auth.php';

session_start();

$mode = $_SERVER['REQUEST_METHOD'] === 'POST' && ($_SERVER['HTTP_HX_REQUEST'] ?? '') === 'true';

if ($mode) {
  $email = (string)($_POST['email'] ?? '');
  $password = (string)($_POST['password'] ?? '');

  $res = login_user($email, $password);

  header('Content-Type: text/html; charset=utf-8');

  if (!$res['ok']) {
    echo '<div class="error">' . htmlspecialchars($res['error'], ENT_QUOTES) . '</div>';
    exit;
  }

  // HTMX-friendly redirect:
  echo '<script>window.location.href = "/dashboard.php";</script>';
  exit;
}

?><!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Login</title>
  <script src="https://unpkg.com/htmx.org@1.9.12"></script>
  <link rel="stylesheet" href="/assets/style.css" />
</head>
<body>
  <div class="container">
    <h1>Login</h1>

    <div id="form-result"></div>

    <form
      hx-post="/login.php"
      hx-target="#form-result"
      hx-swap="innerHTML"
    >
      <label>Email</label>
      <input type="email" name="email" required />

      <label>Password</label>
      <input type="password" name="password" required />

      <button type="submit">Sign in</button>
    </form>

    <p class="muted">No account yet? <a href="/register.php">Register</a></p>
  </div>
</body>
</html>
```

---

### 6) `public/dashboard.php`
```php
<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/auth.php';

session_start();
require_login();

$u = current_user();

?><!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Dashboard</title>
  <link rel="stylesheet" href="/assets/style.css" />
</head>
<body>
  <div class="container">
    <h1>Dashboard</h1>

    <div class="card">
      <div><b>User:</b> <?= htmlspecialchars((string)($u['email'] ?? '')) ?></div>
      <div class="muted">You are logged in.</div>
    </div>

    <form action="/logout.php" method="post">
      <button type="submit" class="secondary">Logout</button>
    </form>
  </div>
</body>
</html>
```

---

### 7) `public/logout.php`
```php
<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/auth.php';

logout_user();
header('Location: /login.php');
exit;
```

---

### 8) `public/assets/style.css`
```css
:root {
  --bg: #0b1220;
  --card: #121b2f;
  --text: #e7eefc;
  --muted: #9fb0d0;
  --primary: #4f8cff;
  --danger: #ff5c7a;
  --success: #34d399;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: linear-gradient(180deg, #0b1220, #070b13);
  color: var(--text);
}

.container {
  max-width: 720px;
  margin: 48px auto;
  padding: 0 16px;
}

h1 {
  margin: 0 0 16px;
  font-size: 28px;
}

form {
  display: grid;
  gap: 12px;
  background: var(--card);
  border: 1px solid rgba(255,255,255,0.06);
  padding: 16px;
  border-radius: 12px;
}

label {
  font-size: 14px;
  color: var(--muted);
}

input {
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.03);
  color: var(--text);
}

button {
  cursor: pointer;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  background: var(--primary);
  color: white;
  font-weight: 600;
}

button.secondary {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
}

.card {
  background: var(--card);
  border: 1px solid rgba(255,255,255,0.06);
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 16px;
}

.error {
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(255,92,122,0.12);
  border: 1px solid rgba(255,92,122,0.35);
  color: var(--danger);
}

.success {
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.35);
  color: var(--success);
}

.muted {
  color: var(--muted);
  font-size: 14px;
}

a { color: var(--primary); text-decoration: none; }
a:hover { text-decoration: underline; }
```

---

## Run locally (quick)
From Phase1/AuthDemo folder (adjust paths):

```bash
php -S 127.0.0.1:8000 -t public
```

Open:
- http://127.0.0.1:8000/login.php
- http://127.0.0.1:8000/register.php

---

## How to test this demo (Phase 1 practice)
Use the skills you learned to create a simple test strategy:
- Positive flow: register -> login -> dashboard
- Negative flow: invalid email format, short password, duplicate email
- Negative flow: wrong password should show generic error
- Session validation: dashboard requires login

If you want, I can also generate a **Phase 1 test scenario list** for this exact demo screens.

## Theory behind the demo

### The browser is not a trust boundary
HTML constraints such as required fields and minimum length improve feedback, but a client can be bypassed. The server must repeat validation before it changes data or grants access. This gives two distinct test layers: check that the browser guides ordinary users, and check that direct or malformed requests are still rejected safely.

### Identity, credentials, and sessions are different things
A password is a credential used to establish identity. The database should retain a one-way password hash, not a reversible copy of the password; PHP password hashing also stores parameters needed to verify and later upgrade the hash. After successful verification, the server associates a session identifier with the authenticated user. The browser carries that identifier on later requests, so it functions like a temporary bearer credential and must be protected.

For a production design, review secure cookie attributes, HTTPS, session identifier rotation after authentication, expiration, server-side invalidation at logout, CSRF defenses for state-changing requests, and throttling of repeated attempts. These controls address separate threats; a generic error message alone does not stop guessing or protect a stolen session.

### Data constraints and request handling
Parameterized SQL separates values from SQL syntax, reducing injection risk. A unique database constraint is still needed for email because two concurrent registrations can both pass an earlier “does this email exist?” check. The constraint is the final authority for uniqueness. Normalize values consistently before validation and persistence, then test that the same identity is treated consistently at registration and login.

### HTMX changes the response shape, not the security model
An HTMX request asks the server for an HTML fragment that can replace part of the page. The server still owns validation, authorization, persistence, and error semantics. Tests should therefore verify both the fragment shown to the user and the durable state behind it; a success message alone does not prove that a user was stored correctly.

### Treat the sample as a learning model
The compact example demonstrates a request path and several important safeguards, but it omits controls needed for a hardened deployment. Use it to reason about trust boundaries and derive tests, then compare the implementation with the application's actual security requirements before reuse.
