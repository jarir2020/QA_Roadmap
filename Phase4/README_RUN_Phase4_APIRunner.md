# Phase 4 — API runner script (AuthDemo)

## What the script does
- POST `/register.php`
- POST `/login.php` (stores session cookies)
- GET `/dashboard.php` using the cookie jar

## Run
```bash
cd Phase4
chmod +x phase4_api_post_runner.sh
BASE_URL=http://127.0.0.1:8030 \
./phase4_api_post_runner.sh
```

## Customize
- `EMAIL`, `PASSWORD`, `COOKIE_JAR`, `BASE_URL`

Example:
```bash
EMAIL=myuser@example.com PASSWORD=Password123! BASE_URL=http://127.0.0.1:8030 \
./phase4_api_post_runner.sh
```
