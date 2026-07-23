# Architecture Overview

Explain how the app works.

App
↓
Authentication
↓
Role Detection
↓
Load Navigation
↓
Load Modules
↓
Load Screens

## Module-based Architecture
The application is built using a strict modular architecture. Each business feature (e.g., Onboarding, Tournaments, Player Profiles) is encapsulated within its own module. Modules are self-contained and expose only necessary interfaces to the rest of the application, ensuring scalability and ease of maintenance.

## Shared Components
To maintain consistency and reduce duplication, all UI building blocks (buttons, inputs, cards, dialogs) are centralized in a shared components library. Modules must compose their screens using these shared components rather than creating custom elements for standard UI interactions.

## Shared Theme
A unified design system dictates the shared theme, providing consistent spacing, typography, colors, and shadows. All styling must adhere strictly to these theme tokens. Hardcoded styles or magic numbers are strictly prohibited.

## Shared Navigation
Routing and navigation logic is centrally managed but dynamically driven based on the user's detected role. Navigation structures (tabs, sidebars) are shared, but the destinations they link to are conditionally loaded depending on whether the user is an Athlete, Coach, Organiser, or Government Official.
