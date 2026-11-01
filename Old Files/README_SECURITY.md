# Old Files security note

This folder contains older scripts. If you see credentials or API keys here, do not use them.

If a key was committed, rotate/revoke it immediately.

## Theory: cleanup and revocation are separate controls

Deleting a credential from a working tree limits future accidental use but does not invalidate the credential or erase every historical copy. Revoke or rotate the key at its provider, review its permissions and use, then document the replacement and any service updates. Preventive controls such as secret scanning help catch later mistakes but do not replace incident remediation.
