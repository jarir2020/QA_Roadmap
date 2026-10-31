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
