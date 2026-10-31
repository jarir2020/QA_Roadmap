<?php
declare(strict_types=1);

require_once __DIR__ . '/db.php';

function require_login(): void {
  if (!isset($_SESSION['user_id'])) {
    header('Location: /login.php');
    exit;
  }
}

function current_user(): ?array {
  if (!isset($_SESSION['user_id'])) return null;

  $stmt = db()->prepare('SELECT id, email, is_active FROM users WHERE id = ?');
  $stmt->execute([(int)$_SESSION['user_id']]);
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
    return ['ok' => false, 'error' => 'Email already registered'];
  }
}

function login_user(string $email, string $password): array {
  $email = trim(strtolower($email));

  $stmt = db()->prepare('SELECT id, email, password_hash, is_active FROM users WHERE email = ?');
  $stmt->execute([$email]);
  $u = $stmt->fetch();

  // Avoid user enumeration:
  if (!$u || !password_verify($password, $u['password_hash']) || (int)$u['is_active'] !== 1) {
    return ['ok' => false, 'error' => 'Invalid email or password'];
  }

  $_SESSION['user_id'] = (int)$u['id'];
  return ['ok' => true];
}

function logout_user(): void {
  $_SESSION = [];
  if (ini_get('session.use_cookies')) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
      $params['path'], $params['domain'], $params['secure'], $params['httponly']);
  }
  session_destroy();
}
