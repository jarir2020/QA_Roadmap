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

## Theory: separate viewport, browser, and accessibility risks

Responsive behavior is a relationship between available space and content, not a collection of device names. A viewport sample is useful when it exercises likely layout transitions and constraints; also inspect intermediate widths or zoom when a defect suggests a breakpoint problem. A page can fit one screenshot and still fail when text wraps, validation appears, or the on-screen keyboard reduces visible space.

Cross-browser checks look for behavior that differs across browser engines, versions, and platform APIs. Record the exact browser and operating system because a browser name alone does not identify a reproducible environment. The checklist's browser examples are a selection strategy, not proof of compatibility with every browser or device.

Accessibility is an interaction and information property, not a visual polish pass. Labels expose field purpose to assistive technology, keyboard order exposes reachable actions, focus placement communicates state changes, and contrast supports legibility. A manual checklist is a useful screen, but it does not replace assistive-technology review or automated checks across the whole page.
