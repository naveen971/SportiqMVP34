# Folder Structure

This file tells AI where everything belongs.

```text
sportiq-mvp/
├── .ai/              # AI knowledge base
├── assets/           # Static files
├── backend/          # Backend services
├── database/         # Database schemas
├── docs/             # Documentation and future module specs
├── src/
│   ├── app/          # App shell and root component
│   ├── core/         # Core infrastructure
│   ├── shared/       # Reusable components and layouts
│   ├── modules/      # Feature modules
│   ├── routing/      # Routes and guards
│   └── theme/        # Design tokens and global CSS
└── tests/            # Tests
```

## core/
Contains foundational configurations, API clients, environment variables, error handling, and utility functions that power the entire application.

## shared/
Houses all reusable UI components (buttons, forms, typography), the global design theme, common hooks, and types used across multiple modules. Never place feature-specific logic here.

## modules/
Contains all business features. Each module (e.g., auth, athlete-dashboard, tournament-management) must be isolated. 
- Never place module code inside `shared/`.
- Never create duplicate components; rely on `shared/` instead.
- Each module should have its own internal screens, components, and local state.

## routing/
Manages the application's navigation flows, role-based route guards, and path definitions. This is where Authentication and Role Detection dictate which Modules are loaded.

## theme/
Contains the global design system tokens (colors, typography, spacing) implemented as CSS custom properties in `tokens.css`, and global CSS resets.

## assets/ (Root level)
Stores static files such as images, icons, and fonts.

## tests/ (Root level)
Contains end-to-end (E2E) and integration tests.

## backend/ (Root level)
Contains the server-side code, API routes, database models, and business logic for the backend services.
