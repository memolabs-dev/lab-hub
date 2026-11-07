# Public Lab editorial selection, 2026-11-07

Canonical coordinated model, requirements E1–E6, finite graph, attribution sources, risk/coverage and verification evidence live in `guillaume-flambard/portfolio`, `.agent/project/editorial-selection.md`. Sole implementation writer; independent read-only content/code review PASS. This repository owns E4/E5 and its E6 runtime delivery.

The Lab opens with three public independent artifacts, localized explanations and source/package links. The other 27 public explorations remain under a native collapsed disclosure. Private entries and navigation-only self entries are filtered; no authenticated product or technical live flag is offered as proof of adoption. Keep FR/EN and existing #live/#lab/#explorations anchors. Catalog errors, empty data and no JavaScript retain access to professional work. No new dependency, auth, persistence, database, secret or private artifact.

Local evidence: `npm test` 3/3, `npm run build` PASS; coordinated browser verification covers 27 page/width combinations and network/invalid/empty/no-JS states. FR/EN rendered at 390/1000/1440, keyboard disclosure, zero overflow/contrast/page error; an inline touch target was corrected. Native closed-details phantom measurements were checked against actual visibility. Independent final diff review and `git diff --check` PASS. No high/critical content risk remains; exact-head CI, normal GHCR/autodeploy revision and live smoke remain required before technical acceptance.

Rollout: existing `build.yml` on main, GHCR, native VPS autodeploy. No hand mutation of production files. Rollback via the same pipeline to the preceding source. Human editorial acceptance stays separate in portfolio issue #53.

## Release evidence

- PR [#6](https://github.com/memolabs-dev/lab-hub/pull/6) merged, delivery revision `d90f5d11859fdd2c0573f04d1db33245fdc5541c`.
- Exact branch verification [42370251379](https://github.com/memolabs-dev/lab-hub/actions/runs/42370251379) PASS, tests/build/private-console guard. Main image [42370293270](https://github.com/memolabs-dev/lab-hub/actions/runs/42370293270) PASS.
- Native VPS autodeploy observed the revision above in `lab-hub-lab-hub-1`, running; journal confirms deployed and healthy at 2026-11-07 12:58:34 Europe/Paris.
- Coordinated public smoke PASS: 27 page/viewport combinations across both sites, zero page error/overflow, 3 curated + 27 archived Lab items, keyboard disclosure and 4 failure/no-JS states. Public Lab FR inspected visually, selection/source links present. Browser evidence retained in the originating task workspace.
- No open technical issue or PR in this repository after #6. Branch retained per owner storage policy. No worktree or runtime dependency added. Remaining task is owner editorial acceptance in portfolio#53; no commercial result inferred.

Lab scope: READY_FOR_MANUAL_ACCEPTANCE, P0/P1 0, no failed/pending agent-controlled acceptance criterion or high/critical open risk. The canonical coordinator may still be VERIFYING a subsequent portfolio-only wording delta.
