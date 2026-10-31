<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/auth.php';

session_start();

$isHxPost = $_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SERVER['HTTP_HX_REQUEST']);

if ($isHxPost) {
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
