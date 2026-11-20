# Stately Hyland Apiaries — rebuild

Fresh self-hosted rebuild of the Stately Hyland Apiaries storefront.

## Stack

- Next.js + TypeScript
- Payload CMS for content, users, and media
- Puck for visual drag-and-drop blog composition
- PostgreSQL
- Stripe for checkout and payment processing
- Docker Compose for self-hosting, with Caddy as the reverse proxy

## Development status

This repository is the replacement project. The existing storefront and Sanity studio are reference-only and remain unchanged.

The initial milestone is the CMS foundation and visual blog editor. The existing storefront uses Stripe product and checkout logic, so that integration will be ported deliberately and tested in Stripe test mode before any production cutover.

## Planned milestones

1. [ ] Establish the Next.js/Payload/PostgreSQL foundation.
2. [ ] Build the Puck editor with reusable text, image, video, gallery, and callout blocks.
3. [ ] Recreate the public site shell and migrate content from Sanity.
4. [ ] Rebuild product listings and cart; port Stripe checkout and webhook handling.
5. [ ] Add Docker deployment, persistent media, backups, and Caddy configuration.
6. [ ] Test accessibility, mobile layout, SEO, payment flows, and rollback before changing DNS.

## Local setup

Setup instructions will be added after the first working application foundation is committed. Do not point production domains or Stripe live-mode webhooks at this project yet.
