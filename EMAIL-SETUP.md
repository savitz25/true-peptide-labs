# C4 — VialVibes email setup

Public support address: **hello@asktrusthub.com**. Use this address in visitor-facing copy, links, and replies.

The existing contact and lot-documentation forms use Resend through Vercel serverless routes. This document describes the code defaults; deployment configuration and delivery must be checked separately.

## Routes

| Route | Purpose |
| --- | --- |
| `POST /api/contact` | Research and documentation messages |
| `POST /api/vault-request` | Vault and CoA requests |
| `POST /api/resend-inbound` | Optional inbound forwarding webhook |

## Environment settings

| Variable | Purpose / code default |
| --- | --- |
| `RESEND_API_KEY` | Required for outbound delivery; keep secret |
| `EMAIL_FROM_RESEARCH` | `VialVibes Research <hello@asktrusthub.com>` |
| `EMAIL_FORWARD_TO` | Internal recipient; defaults to `info@movetrusthub.com` |
| `EMAIL_CC` | Optional internal copy |
| `SITE_URL` | `https://www.vialvibes.com` |
| `RESEND_WEBHOOK_SECRET` | Optional inbound webhook secret |

The internal forwarding destination is not a public support address. The sender domain must be verified in the email provider. Form messages use the visitor's email as Reply-To so the team can reply directly. There is no separate orders mailbox in the current research-only flow.

## Delivery verification

Check the deployed sender settings against the public support address. For an authorized delivery test, confirm that a form message reaches the internal recipient and that Reply-To contains the submitted email address. Check inbound routing for `hello@asktrusthub.com` separately; source changes alone do not configure DNS, mailboxes, or provider settings.
