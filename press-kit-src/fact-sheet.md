# OKO Holding Corporation — Fact Sheet

**Last reviewed:** 2026-10-16

## Company

| | |
|---|---|
| Legal name | OKO Holding Corporation |
| Entity type | Delaware C-corporation |
| Headquarters | Jupiter, Florida, USA |
| Founders | Mo Perez · David Thrower · Jonathan Castoire |
| Stage | Pre-institutional. By-request investor profile at `/investors`. |
| Website | https://okoholding.com |

## Product spine

| Product | Role | Maturity label |
|---|---|---|
| Thunderline | Governed operating substrate for human-agent teams | Research substrate |
| ThunderBlock | Managed workspace / hive on the Thunderline substrate | Beta |
| Prism | Live operator surface over governed agent actions | Live operator surface |
| ACORN | Reference application proving the stack | Reference application |
| IVAR | Vision-analysis application (field operations and CD intake) | Design-partner stage |

**Not products:** Cerebros (ML runtime), DORIS (governed business ops), ATLAS (research). All labelled `research` or `early development` on `/product` and `/platform`.

## Core claim (what we build)

Every consequential agent action in Thunderline passes through a 4-tier policy gate (`:read` · `:mutate` · `:admin` · `:execute`) and emits one 17-field sealed `ActionReceipt` paired with a persisted lineage edge. The receipt-and-lineage pair makes agent operations auditable with deterministic SQL queries — no reconstruction, no third-party log correlation.

## What we do not claim

- No SOC2 Type II audit (roadmap target: Q1 2027)
- No formal verification claim
- No customer logos or case studies (we don't have them yet)
- No fabricated metrics
- Receipt seals are unkeyed (tamper-evident, not tamper-proof) — see GH #3173 on `/security`

## Technical surface for diligence

- Full receipt spine: https://okoholding.com/security/
- Platform architecture: https://okoholding.com/platform/
- Docs (10 real Elixir + SQL snippets): https://okoholding.com/docs/
- Source: https://github.com/Thunderblok/Landing (Apache 2.0, this site only — not the Thunderline codebase)

## Press contact

press@okoholding.com — routes to Mo Perez pre-institutional. 2 business-day response target. PGP available on request.
