<?php
declare(strict_types=1);

function env(string $key, ?string $default = null): ?string {
  $value = $_ENV[$key] ?? getenv($key);
  if ($value === false || $value === null || $value === '') return $default;
  return (string)$value;
}

function db(): PDO {
  static $pdo = null;
  if ($pdo instanceof PDO) return $pdo;

  // Load .env for local dev (very small parser)
  $envPath = __DIR__ . '/../.env';
  if (file_exists($envPath) && is_readable($envPath)) {
    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
      $line = trim($line);
      if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) continue;
      [$k, $v] = array_map('trim', explode('=', $line, 2));
      if (!array_key_exists($k, $_ENV)) {
        $_ENV[$k] = $v;
      }
      if (getenv($k) === false) {
        putenv($k . '=' . $v);
      }
    }
  }

  $host = env('DB_HOST', 'localhost');
  $port = env('DB_PORT', '3306');
  $dbName = env('DB_NAME', 'sqa_demo_auth');
  $user = env('DB_USER', 'root');
  $pass = env('DB_PASS', 'root');

  $dsn = "mysql:host={$host};port={$port};dbname={$dbName};charset=utf8mb4";
  $pdo = new PDO($dsn, $user, $pass, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  ]);

  return $pdo;
}
