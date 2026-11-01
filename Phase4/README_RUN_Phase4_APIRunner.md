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

## Theory: distinguish a request sequence from a test

The helper sends requests and prints response snippets, but it does not assert status codes or expected content. The current script also omits the HX-Request header that the AuthDemo handlers use to recognize form submissions, so its POSTs do not exercise the registration and login actions described by the API cases. Treat its output as a connectivity demonstration only; use the curl examples with the required header and explicit assertions when collecting behavioral evidence.

The cookie jar illustrates session continuity: login must return a cookie, and the dashboard request must replay it. A useful test verifies each link in that chain rather than inferring success from the script's final message.

## Customize
- `EMAIL`, `PASSWORD`, `COOKIE_JAR`, `BASE_URL`

Example:
```bash
EMAIL=myuser@example.com PASSWORD=Password123! BASE_URL=http://127.0.0.1:8030 \
./phase4_api_post_runner.sh
```
