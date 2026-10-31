# Phase 3 Checklist — AuthDemo (Responsive + Cross-browser + A11y)

## 0) Scope
Pages:
- `register.php`
- `login.php`
- `dashboard.php`

Devices / viewports:
- Desktop: 1366x768
- Laptop: 1024x768
- Tablet: 768x1024
- Mobile: 375x667

Browsers (examples):
- Chrome
- Firefox
- Edge

---

## 1) Responsive / Layout
- [ ] Page loads without horizontal scroll
- [ ] Container and form scale correctly on all viewports
- [ ] Font sizes and spacing remain readable on mobile
- [ ] Buttons are visible and tappable (not cut off)
- [ ] Links (Login/Register) remain clickable

---

## 2) Browser behavior sanity
- [ ] HTMX form submit updates the `#form-result` area
- [ ] Error/success messages appear in correct area (no misplaced DOM)
- [ ] Redirect to `/dashboard.php` after successful login works
- [ ] Dashboard redirect to `/login.php` when logged out works
- [ ] Logout returns to login and blocks dashboard access again

---

## 3) DevTools Evidence (capture on issues)
- [ ] Console: no unexpected JS errors
- [ ] Network tab: requests return expected status codes
- [ ] If failing: save request/response details (URL + status + response body)

---

## 4) Basic accessibility checks (manual)
- [ ] Inputs have visible labels (not only placeholder)
- [ ] Tab order is logical: email → password → submit
- [ ] Focus moves to the correct area after validation error
- [ ] Buttons have clear text (not only icons)
- [ ] Color contrast is acceptable for text and error/success messages

---

## 5) Cross-browser notes
- [ ] Check that no page relies on a single browser feature
- [ ] Record any browser-specific discrepancies

---

## Result format
- Overall status: PASS / FAIL / PARTIAL
- Issues found (with IDs)
- Evidence links: screenshots + console/network logs
