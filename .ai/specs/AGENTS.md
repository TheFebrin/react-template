# Specs Folder Guidelines

This folder contains feature specs and architectural notes for this Vite + React + TypeScript + Tailwind + shadcn/ui repo.

## Purpose
- Keep design intent and implementation behavior aligned.
- Make feature decisions discoverable for future changes.
- Reduce regressions by documenting acceptance criteria and edge cases.

## When A Spec Is Required
Create or update a spec when a change introduces at least one of the following:
- New user-facing feature or flow.
- Behavior change to an existing feature.
- Significant UI architecture/component boundary change.
- Cross-cutting technical decision likely to affect future work.

A spec update is optional for:
- Pure refactors with no behavior change.
- Formatting/chore-only updates.
- Trivial copy/style tweaks.

## File Naming
- One spec per feature area.
- Use concise kebab-case names, e.g.:
  - `.ai/specs/auth-flow.md`
  - `.ai/specs/dashboard-filters.md`
  - `.ai/specs/ui-reusable-components.md`

## Required Spec Structure
Each spec should contain these sections:
1. `Overview`
2. `Scope`
3. `Non-goals`
4. `UI Behavior`
5. `Data / Contracts` (only if applicable)
6. `Implementation Notes`
7. `Acceptance Criteria`
8. `Changelog`

## Changelog Format
Use ISO date format (`YYYY-MM-DD`) and keep entries meaningful.

```markdown
## Changelog

### 2026-02-16
- Added keyboard shortcut behavior for command palette.
- Clarified fallback behavior for empty search results.
```

## Workflow
### Before Coding
1. Check whether a spec already exists for the feature.
2. Read and align with current intended behavior.
3. Identify outdated sections before implementing.

### During/After Coding
1. Update the relevant spec in the same change when behavior/architecture changed.
2. Keep the spec concise and implementation-aligned (no aspirational docs).
3. Add a changelog entry for meaningful updates.

## Skills Integration
- Check `.ai/skills/` for relevant skills before defining a custom pattern.
- In `Implementation Notes`, reference the skill used when it materially shaped the implementation.
- Prefer reusable skill patterns/templates over ad-hoc approaches.

## Serena Alignment
- Keep spec guidance consistent with root `AGENTS.md`.
- If conventions evolve, ensure Serena memories remain aligned with updated repository guidance.

## For AI Agents
1. Always search for an existing spec before major feature changes.
2. Treat specs as living docs tied to real code behavior.
3. Do not leave specs stale after behavior changes.
