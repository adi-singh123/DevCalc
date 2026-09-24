# DevCalc email-domain security

The contact form currently sends through a `gmail.com` account, not a `@devcalc.in` address. Gmail supplies authentication for those messages.

If DevCalc will continue without domain mailboxes, add these records in the domain DNS dashboard:

| Type | Host | Value | Purpose |
| --- | --- | --- | --- |
| MX | `@` | `0 .` | Declare that the domain receives no email |
| TXT | `@` | `v=spf1 -all` | No server may send mail as `devcalc.in` |
| TXT | `_dmarc` | `v=DMARC1; p=reject; adkim=s; aspf=s; rua=mailto:dmarc_rua@onsecureserver.net; pct=100` | Reject spoofed mail and retain aggregate reports |

Only use the null MX and `-all` SPF records while there are no `@devcalc.in` mailboxes or sending services. If domain email is added later, replace them with the exact MX, SPF and DKIM records supplied by that provider before sending mail.

The DNS audit on 23 September 2026 found no MX and no SPF record. DMARC exists with `p=quarantine`; the proposed record tightens it to `p=reject`.
