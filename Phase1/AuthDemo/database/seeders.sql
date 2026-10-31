USE sqa_demo_auth;

-- Demo user for testing:
-- Email: demo@example.com
-- Password: Password123!

-- IMPORTANT:
-- This demo uses PHP password_hash()/password_verify().
-- Because password_hash includes a random salt, you cannot safely seed
-- a working login hash in plain SQL without generating it.

-- Recommended approach:
-- 1) Start the app
-- 2) Register demo@example.com with Password123!
--
-- If you still want SQL seeding, create the hash in PHP and paste it here.
