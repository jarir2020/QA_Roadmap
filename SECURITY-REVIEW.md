# Security notice: exposed secret remediation

## Summary
A Google Maps API key was found committed in `Old Files/unions.py` (and also `Old Files/unicorns.py`).

## Action taken
- Removed the hard-coded Google API key from the repository.
- Replaced it with an environment variable placeholder.

## Follow-up required (recommended)
- Rotate/revoke the exposed Google API key in the Google Cloud Console.
- Consider adding `.env` to `.gitignore` (already present for AuthDemo) and adding secret scanning to prevent future commits.
