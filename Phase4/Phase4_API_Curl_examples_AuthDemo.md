# Phase 4 — Curl examples (AuthDemo)

## Base URL
`http://127.0.0.1:8000`

## Register
```bash
curl -s -X POST "http://127.0.0.1:8000/register.php" \
  -d "email=test1@example.com" \
  -d "password=Password123!"
```

## Login
```bash
curl -s -X POST "http://127.0.0.1:8000/login.php" \
  -d "email=demo@example.com" \
  -d "password=Password123!" \
  -c cookies.txt
```

## Dashboard (with cookies)
```bash
curl -s -X GET "http://127.0.0.1:8000/dashboard.php" -b cookies.txt
```

## Wrong login (non-existent user)
```bash
curl -s -X POST "http://127.0.0.1:8000/login.php" \
  -d "email=noone@example.com" \
  -d "password=Password123!"
```
