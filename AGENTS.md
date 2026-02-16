# Agents Guidelines

This repository is a single-app Vite + React + TypeScript project configured with Tailwind CSS v4 and shadcn/ui.

## Project Scope
- App type: single frontend app (not a monorepo)
- Framework: React 19 + Vite 7 + TypeScript
- Styling: Tailwind CSS v4 (`@tailwindcss/vite`) + shadcn/ui

## Directory Structure
- `src/main.tsx`: app entrypoint
- `src/App.tsx`: primary app component
- `src/index.css`: Tailwind + shadcn styles and theme tokens
- `src/components/ui/*`: shadcn-generated UI components
- `src/lib/utils.ts`: shared utility helpers (`cn`)
- `public/`: static assets

## Commands
- `npm run dev`: start development server
- `npm run build`: type-check and create production build
- `npm run preview`: preview production build locally
- `npm run lint`: run ESLint

## Import Aliases
- Use `@/*` for source imports
- Alias is configured in:
  - `tsconfig.json`
  - `tsconfig.app.json`
  - `vite.config.ts`

## Code Style
- Use TypeScript strict mode patterns and avoid `any`
- Prefer functional React components and hooks
- Keep components focused and reusable
- Remove dead code and unused exports/imports quickly
- Keep exports minimal and strongly typed
- Prefer self-documenting code; add comments only when intent is non-obvious
- Keep comments minimal and only where intent is not obvious

## UI Conventions
- Prefer existing shadcn/ui components before creating custom primitives
- Keep styling in Tailwind utility classes where practical
- Use `cn()` from `@/lib/utils` for class composition
- Preserve accessibility defaults from shadcn components

## Quality Gates
- Validate changes with:
  - `npm run lint`
  - `npm run build`
- Do not leave intentionally unused files, imports, or exports.
- If generated shadcn code conflicts with lint rules, adapt it to project rules.

## Agent Workflow
1. Before coding, inspect existing components/utilities to avoid duplication.
2. For UI work, use existing `src/components/ui/*` primitives first.
3. After changes, run:
   - `npm run lint`
   - `npm run build`
4. If adding a notable feature or architectural decision, update/create a spec in `.ai/specs/`.
5. If a relevant local skill exists in `.ai/skills/`, follow that skill before inventing a custom approach.

## Specs
- Specs live in `.ai/specs/`
- Read `.ai/specs/AGENTS.md` before creating/updating spec files.
- Use one file per feature area (e.g. `.ai/specs/auth.md`).
- Keep specs concise and implementation-aligned.
- Recommended spec structure:
  - Overview
  - Architecture / component boundaries
  - Data contracts (props, state shape, API payloads if applicable)
  - UI behavior and edge cases
  - Configuration notes
  - Changelog
- Changelog format:
  - `## Changelog`
  - `### YYYY-MM-DD`
  - bullet list of meaningful changes

## Skills
- Skills live in `.ai/skills/<skill-name>/`.
- Each skill should define behavior in `SKILL.md`.
- Some skills may include additional guidance in `AGENTS.md` and rule files under `rules/`.
- Current local skills:
  - `vercel-composition-patterns`
  - `vercel-react-best-practices`
  - `web-design-guidelines`
- Skill usage rule:
  - If a task matches an existing skill, use that skill’s instructions first.
  - Reuse skill assets/templates rather than re-creating patterns from scratch.
  - Keep repository-level conventions in this file as the baseline; skills are task-specific overlays.

## Serena MCP
- This repo uses Serena MCP for project-aware coding workflows.
- Expected flow:
  1. Activate project in Serena before deeper code work.
  2. Ensure onboarding is performed and keep memories up to date when conventions evolve.
  3. Prefer Serena symbolic/code-intel tools for targeted edits and references.
  4. Use shell/file tools for fast checks, commands, and non-symbolic files.
  5. Before finishing substantial tasks, run a quick completion check (lint/build + verify changed behavior).
- Keep Serena memories aligned with this file, especially:
  - project overview
  - suggested commands
  - style conventions
  - task completion checklist
