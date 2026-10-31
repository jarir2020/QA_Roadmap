<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/auth.php';

session_start();
require_login();

$u = current_user();
if (!$u || (int)$u['is_active'] !== 1) {
  header('Location: /login.php');
  exit;
}

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
