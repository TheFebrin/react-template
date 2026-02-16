# React Vibe Coding Template

A modern Vite template for React + TypeScript with Tailwind CSS v4 and shadcn/ui preconfigured.

## Stack
- React 19
- TypeScript 5 (strict mode)
- Vite 7
- Tailwind CSS v4 via `@tailwindcss/vite`
- shadcn/ui
- ESLint 9 (flat config)

## Quick Start
```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Available Scripts
- `npm run dev` - start local dev server
- `npm run build` - type-check and build for production
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Tailwind + shadcn Setup
- Tailwind is loaded in `src/index.css`.
- shadcn is initialized with `components.json`.
- Example UI component path: `src/components/ui/button.tsx`.

## Path Alias
Use `@/` for source imports.

Configured in:
- `tsconfig.json`
- `tsconfig.app.json`
- `vite.config.ts`

Example:
```ts
import { Button } from "@/components/ui/button"
```

## Project Layout
```text
src/
  App.tsx
  main.tsx
  index.css
  components/ui/
  lib/utils.ts
.ai/
  specs/
  skills/
```

## Agent/AI Notes
- Repository guidance: `AGENTS.md`
- Specs guidance: `.ai/specs/AGENTS.md`
- Local skills: `.ai/skills/*`
- Serena project state/memories: `.serena/`

