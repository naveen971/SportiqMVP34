# Folder Structure

This file tells AI where everything belongs.

```text
src/
├── core/
├── shared/
├── modules/
├── routing/
├── state/
├── assets/
├── tests/
└── backend/
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

## state/
Contains global state management (e.g., Redux, Zustand, or Context). Only state that must be accessed by multiple independent modules should live here.

## assets/
Stores static files such as images, icons, fonts, and global stylesheets.

## tests/
Contains end-to-end (E2E) and integration tests. Unit tests may be co-located with their respective components/modules, but broad application tests reside here.

## backend/
Contains the server-side code, API routes, database models, and business logic for the backend services.
