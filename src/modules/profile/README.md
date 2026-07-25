# Profile Module

This module encompasses the user's Profile flows, including the onboarding sequence for profile creation, and the steady-state profile viewing and editing screens.

## Screens Built So Far

| Screen | Route | Stitch ID | Purpose |
|---|---|---|---|
| Select Sports | `/select-sports` | `9dcf3c98d6014b138364c73940b03698` | Multi-select grid for sports of interest during onboarding. First step in the sequence. |
| Create Sports Profile | `/create-sports-profile` | `36a44b1ec6244d9db3556da84ddc7948` | Gathers basic professional info (name, role, bio, photo). Second step. |

## Onboarding Wizard Structure (Resolved 2026-07-25)

The wizard is **4 required steps**, with one optional/reusable screen inserted after Step 1. Full resolved order:

| Position | Screen | Status | Step Counter |
|---|---|---|---|
| Pre-wizard | **Select Sports** | ✅ Built | None (separate 35% bar) |
| Required Step 1/4 | **Create Sports Profile** | ✅ Built | Step 1 of 4 |
| Optional insert | **Profile Picture Upload** | ✅ Built | Not counted — optional & skippable; also reusable from Edit Profile / Settings |
| Required Step 2/4 | **Personal Information** | ⏳ Pending | Step 2 of 4 |
| Required Step 3/4 | **Playing Information** | ⏳ Pending | Step 3 of 4 |
| Required Step 4/4 | **Profile Completion** | ⏳ Pending | Step 4 of 4 (terminal screen) |

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

**Schema Gaps — Status:**
- **Bio** ✅ **Resolved** — Migration `002_add_bio_avatar_to_profiles.sql` adds a `bio text` column with a `CHECK (char_length(bio) <= 500)` constraint. Bio is now persisted via `updateProfileOnboarding()` in `profileService.ts`.
- **Avatar URL** ⏳ **Still pending** — Migration `002` adds the `avatar_url text` column to the schema, but file upload to Supabase Storage is a separate future task. The UI `Upload Image` button is present but non-functional for persistence. `avatar_url` is intentionally excluded from the current `updateProfileOnboarding()` call until a storage bucket and upload flow are implemented.
