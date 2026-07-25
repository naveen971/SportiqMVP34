# Profile Module

This module encompasses the user's Profile flows, including the onboarding sequence for profile creation, and the steady-state profile viewing and editing screens.

## Screens Built So Far

| Screen | Route | Stitch ID | Purpose |
|---|---|---|---|
| Select Sports | `/select-sports` | `9dcf3c98d6014b138364c73940b03698` | Multi-select grid for sports of interest during onboarding. First step in the sequence. |
| Create Sports Profile | `/create-sports-profile` | `36a44b1ec6244d9db3556da84ddc7948` | Gathers basic professional info (name, role, bio, photo). Second step. |

## Planned Onboarding Sequence

1. **Select Sports** (✅ Built)
2. **Create Sports Profile** (✅ Built)
3. **Personal Information** (⏳ Pending)
4. **Playing Information** (⏳ Pending)
5. **Profile Picture Upload** (⏳ Pending)
6. **Profile Completion** (⏳ Pending)

> **Note:** The route `/personal-information` currently points to a temporary `PlaceholderScreen` with a `TODO`. This will be replaced once the actual screen is built.

## Integration Gaps

> **IMPORTANT:** Onboarding flow is NOT yet auto-triggered after Login/SignUp. This is a deliberate, tracked gap — see integration task list — pending an 'onboarding complete' flag on `StoredUser`.

## Module Scope Notes

- **Profile Preview:** The Profile Preview screen (`96974a1bd17340dab744ce7fbbb1af6c`) is currently **HELD** and removed from the MVP scope per `module-registry.md`. Do not build it unless explicitly reactivated.
- **Achievements:** There are two distinct screens in Stitch related to achievements (a standalone page and an embedded section). Ensure they are treated as separate views when implemented.

## Database Schema

The `public.profiles` table stores extended user information.

**Schema:**
- `id` (uuid, primary key, references `auth.users(id)` cascading delete)
- `full_name` (text)
- `role` (text)
- `selected_sports` (text array, defaults to `{}`)
- `onboarding_complete` (boolean, defaults to `false`)
- `created_at` (timestamptz, defaults to `now()`)
- `updated_at` (timestamptz, defaults to `now()`)

**Automation:**
- A database trigger (`handle_new_user`) automatically populates a row here on signup, pulling `full_name` and `role` from the `auth.users` raw metadata.

**Security (RLS):**
- Row Level Security (RLS) is enabled.
- Users are restricted to SELECT, UPDATE, and INSERT their **own** row only (`auth.uid() = id`).
- > **Note:** A policy to allow users to view/edit others' profiles (for the future Public Profile screen) is a deliberate follow-up task and is NOT yet implemented.

**Schema Gaps (Awaiting Operator Decision):**
- **Bio:** The Create Sports Profile screen allows entering a professional bio (max 500 chars), but there is currently no `bio` column in `public.profiles`.
- **Profile Photo:** The screen allows uploading a profile photo, but there is no `avatar_url` or `profile_photo` column in `public.profiles`.
- These inputs are fully built in the UI but are currently un-persisted pending a database migration.
