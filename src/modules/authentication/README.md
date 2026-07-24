# Authentication Module

This module handles authentication screens and state representation for SportIQ.

## Integrated Screens (via Google Stitch)
*   **Splash Screen**: Loads at `/splash`. Features an animated loading indicator, and redirects to `/login` (or `/` if already authenticated) after 2.5 seconds.
*   **Login Screen**: Loads at `/login`. Features credential verification (against user accounts in `localStorage`), Google single-sign-on simulation, and links to Sign Up.
*   **Sign Up Screen**: Loads at `/signup`. Collects user details, password confirmation, and user role selection. Persists the registered credentials to `localStorage` and redirects directly to Home.

## State Management & Routing
*   Integrates with the React context `AuthProvider` to set the active `User` object (which includes role).
*   Guarded routes automatically redirect unauthenticated users to `/splash` / `/login`, and authenticated users to `/` (Home).

