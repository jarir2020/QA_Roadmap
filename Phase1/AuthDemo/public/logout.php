<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/auth.php';

session_start();
logout_user();
header('Location: /login.php');
exit;
