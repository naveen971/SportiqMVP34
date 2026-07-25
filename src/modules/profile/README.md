# Profile Module

This module encompasses the user's Profile flows, including the onboarding sequence for profile creation, and the steady-state profile viewing and editing screens.

## Screens Built So Far

| Screen | Route | Stitch ID | Purpose |
|---|---|---|---|
| Select Sports | `/select-sports` | `9dcf3c98d6014b138364c73940b03698` | Multi-select grid for sports of interest during onboarding. First step in the sequence. |

## Planned Onboarding Sequence

1. **Select Sports** (✅ Built)
2. **Create Sports Profile** (⏳ Pending)
3. **Personal Information** (⏳ Pending)
4. **Playing Information** (⏳ Pending)
5. **Profile Picture Upload** (⏳ Pending)
6. **Profile Completion** (⏳ Pending)

> **Note:** The route `/create-sports-profile` currently points to a temporary `PlaceholderScreen` with a `TODO`. This will be replaced once the actual screen is built.

## Integration Gaps

> **IMPORTANT:** Onboarding flow is NOT yet auto-triggered after Login/SignUp. This is a deliberate, tracked gap — see integration task list — pending an 'onboarding complete' flag on `StoredUser`.

## Module Scope Notes

- **Profile Preview:** The Profile Preview screen (`96974a1bd17340dab744ce7fbbb1af6c`) is currently **HELD** and removed from the MVP scope per `module-registry.md`. Do not build it unless explicitly reactivated.
- **Achievements:** There are two distinct screens in Stitch related to achievements (a standalone page and an embedded section). Ensure they are treated as separate views when implemented.
