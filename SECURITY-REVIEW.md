# Security notice: exposed secret remediation

## Summary
A Google Maps API key was found committed in `Old Files/unions.py` (and also `Old Files/unicorns.py`).

## Action taken
- Removed the hard-coded Google API key from the repository.
- Replaced it with an environment variable placeholder.

## Follow-up required (recommended)
- Rotate/revoke the exposed Google API key in the Google Cloud Console.
- Consider adding `.env` to `.gitignore` (already present for AuthDemo) and adding secret scanning to prevent future commits.

## Theory: exposed secrets require lifecycle remediation

A committed key should be treated as compromised because repository history and copies may persist after the visible file is changed. Removing it from the current tree reduces future exposure but does not invalidate copies already obtained. Rotation or revocation at the issuing service is the step that makes the old credential unusable; verify that dependent applications use the replacement before removing the old key.

Environment variables and `.gitignore` reduce accidental disclosure in future commits, but neither repairs a leaked key by itself. Use least-privilege credentials, restrict allowed APIs/origins where supported, scan history and build artifacts, and keep confirmation of rotation separate from the documented source cleanup.
