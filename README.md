# You Gambia

A responsive, static charity website using Next.js App Router, React, TypeScript, Lucide icons and plain CSS.

## Develop and build

- `pnpm install` — install dependencies.
- `pnpm dev` — local development.
- `pnpm typecheck` — TypeScript validation.
- `pnpm build` — export the production website to `out/`.

Serve `out/` with a static host that resolves extensionless routes to their `.html` files. `next start` does not support this static export configuration. No database, authentication, payment backend or environment secrets are required.

## Site structure

- `/` — homepage, project introduction and quick donation platform chooser.
- `/projects` — searchable and filterable project directory.
- `/projects/[slug]` — six statically generated project pages.
- `/donate` — official GoFundMe, PayPal and JoinSusu destinations.
- `/giving` — giving options, zakat enquiries and the stated donation policy.
- `/about` — organization introduction and values.
- `/get-involved` — volunteering, fundraising and collaboration guidance.
- `/updates` — official social profiles, highlights and dated campaign links.
- `/help` — searchable FAQs with topic filters.
- `/contact` — official contact route and enquiry guidance.
- `/search` — local site search.
- `/privacy` — a factual explanation of this website’s data flows.

`app/content.ts` holds official URLs, project content, FAQs and the search index. Shared UI is in `app/components/`; layout and responsive styles are in `app/globals.css`. Most pages render as Server Components. Only navigation, filters, search and donation selection require client state.

## Content sources and boundaries

The owner supplied the official profile https://www.instagram.com/yougambiaa/ and profile/link screenshots. These support the “Charity. Unity. Barakah.” wording, the stated 100% donation and zakat policy, six project highlight categories, and GoFundMe, PayPal, JoinSusu, TikTok and Ramadan 2026 URLs.

The official campaign https://www.gofundme.com/f/yougambia-charity-ramadan supports the food assistance, iftar, masjid care and education descriptions. The Ramadan campaign is explicitly dated 2026; the site does not imply it is currently active. Other payment destinations were transcribed exactly from the supplied screenshot but could not be independently fetched by the browsing tool.

The reference https://oneummah.org.uk/ informed information architecture: accessible project discovery, prominent donation routes, giving guidance and help. Its claims, projects, statistics, policies, registration details and branding are not You Gambia content and have not been copied.

The additional reference https://spotproject.org/ informed donor support guidance: checking payment details, managing regular gifts through the provider, and locating confirmation and project updates. Its payment features and charitable claims are not assumed to apply to You Gambia.

No unverified fundraising totals, impact counts, staff biographies, registration identifiers, Gift Aid eligibility, project costs or recurring payment guarantees are shown. Specific project allocations and zakat acceptance are enquiries for the team. The donation selector only chooses a destination; amount and payment details are entered with the provider.

The site does not submit messages, collect newsletter signups or embed social feeds. Contact routes lead to the real Instagram profile. Search and filters run locally. The privacy page describes the implementation, not an organization-wide legal policy.

## Assets and future content

The blue and green palette reflects the profile. The site’s leaf wordmark and symbolic project illustrations are interface artwork, not the original logo or documentary project photographs. Replace them with owner-supplied original brand files and approved project photos when available.

River image: Gayobah13, CC0 — https://commons.wikimedia.org/wiki/File:River_Gambia.jpg. Used as geographic context. Google Fonts supplies DM Sans and Manrope with local fallbacks.

Useful owner-supplied additions: original logo, approved project photography, detailed donation policy, project budgets/status, organization registration details, team information, and a public contact email. Add only confirmed information.
