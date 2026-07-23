# Coding Rules

This file establishes strict guidelines to maintain a clean, scalable, and manageable codebase. Adhere to these rules to prevent messy code.

## Component & Style Guidelines
- **Always use reusable components.**
- **Never duplicate code.**
- **Never hardcode colors.**
- **Never hardcode spacing.**
- **Always use design tokens.**

## Architecture Guidelines
- **Always use feature-based architecture.**
- **Every module must contain:**
  - `components/`
  - `screens/`
  - `services/`
  - `types/`
  - `hooks/`
  - `README.md`
- **No business logic inside UI.** Keep UI components strictly presentational.
- **Never modify unrelated modules.** Changes should be contained within the specific feature module.

## Code Quality
- **Keep files under 300 lines.**
- **Split large widgets/components** into smaller, single-responsibility pieces.
- **Prefer composition over inheritance.**
- **Comment only when necessary.** The code should be self-documenting; use comments primarily for complex business logic or explaining "why" something is done.
