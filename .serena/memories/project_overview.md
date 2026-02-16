# Project Overview
- Name: `my-project`
- Purpose: React + TypeScript + Vite template for fast UI development with Tailwind CSS v4 and shadcn/ui.
- Platform: Darwin (macOS).

## Tech Stack
- React 19
- TypeScript 5
- Vite 7
- Tailwind CSS 4 via `@tailwindcss/vite`
- shadcn/ui + Radix + class-variance-authority
- ESLint 9 + typescript-eslint + react-hooks + react-refresh

## High-level Structure
- `src/main.tsx`: React entrypoint, mounts app and imports global CSS.
- `src/App.tsx`: Main UI component.
- `src/index.css`: Tailwind + shadcn theme and base styles.
- `src/components/ui/*`: shadcn UI primitives.
- `src/lib/utils.ts`: shared helpers (e.g., `cn`).
- `vite.config.ts`: Vite plugins (`@tailwindcss/vite`, `@vitejs/plugin-react`, React Compiler Babel plugin) + `@` alias.
- `components.json`: shadcn configuration.
- `index.html`: Vite HTML shell with root mount node.
- `eslint.config.js`: Flat ESLint config.
- `tsconfig*.json`: TypeScript and path alias configuration.
