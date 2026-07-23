# SportIQ MVP

A mobile-first sports ecosystem platform connecting athletes, coaches, organisers, and government officials.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Bundler**: Vite
- **Routing**: React Router v6
- **Styling**: CSS Modules with design tokens

## Setup

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
sportiq-mvp/
├── .ai/              # AI knowledge base (read before contributing)
├── assets/           # Static files (images, icons, fonts)
├── backend/          # Backend services (future)
├── database/         # Database schemas (future)
├── docs/             # Documentation and future module specs
├── src/              # Application source code
│   ├── app/          # App shell and root component
│   ├── core/         # Core infrastructure (auth, nav, theme, config)
│   ├── modules/      # Feature modules (authentication, profile, etc.)
│   ├── routing/      # Route definitions and guards
│   ├── shared/       # Reusable components, layouts, hooks, models
│   └── theme/        # Design tokens and global styles
└── tests/            # E2E and integration tests
```

## AI Agents

Read the `.ai/` directory before making any changes. Start with `.ai/README.md` for the reading order.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
