# Module Ownership Registry

**Authoritative Stitch Project ID:** `3941284064310403069` — SportIQ Mobile Design System
**Governance rule:** See `.ai/stitch-workflow.md` → Project Governance section. Single project, no remixing, read-only shared MCP access for non-architects.
**Last synced:** 2026-07-25
**Source inventories:** Full codebase state inventory + full Stitch workspace inventory, both produced 2026-07-25.

---

## Module Summary Table

| Module | Owner | Branch | Build Status | Screens Built / Total | Blocked On |
|---|---|---|---|---|---|
| Authentication | Unassigned | Not created | **Complete** | 6 / 7 *(Account Created deferred)* | — |
| Profile | Unassigned | Not created | Not started | 0 / 13 | Shared component interfaces (Button, Input) must be frozen first |
| Social | Unassigned | Not created | Not started | 0 / 8 *(excl. assets)* | Post Detail ambiguity — operator must pick v1 or v2 before work begins; shared component interfaces |
| Search | Unassigned | Not created | Not started | 0 / 4 | Shared component interfaces |
| Messaging | Unassigned | Not created | Not started | 0 / 2 | Shared component interfaces |
| Notifications | Unassigned | Not created | Not started | 0 / 1 | Shared component interfaces |
| Settings | Unassigned | Not created | Not started | 0 / 1 | Shared component interfaces |

---

## Per-Module Screen Detail

### Authentication

All screens wrapped in `<PublicRoute>`. Verified navigation flow documented in `src/modules/authentication/README.md`.

| Screen Name | Screen ID | Build Status | Notes |
|---|---|---|---|
| Splash Screen | `e6284d8b57064d34b643bee9cdeb12c4` | Built | `SplashScreen.tsx` — auto-navigates after 2500 ms |
| Welcome to SportIQ | `5dd2f754420c452f8661d1a9b739fdb9` | Built | `WelcomeScreen.tsx` — Get Started / Sign In / Explore as Guest |
| Login | `904ea4a3b2a94ea9b2a95c4a45b702a3` | Built | `LoginScreen.tsx` — credential form + Google login mock |
| Sign Up | `1ecbe3fbb0e64da187c25f35ed61722b` | Built | `SignUpScreen.tsx` — role selector, persists to localStorage |
| Verify Email | `223bbcb17016423580c0ce687e3ce88a` | Built | `VerifyEmailScreen.tsx` — mocked verification, navigates to Login |
| Forgot Password | `aa5f559dd1d140c9bfadb231a301ebf9` | Built | `ForgotPasswordScreen.tsx` — email form + inline success state |
| Account Created | `f64fb0ec78e149a989612c50b892d55e` | Deferred | Flow currently skips this screen (SignUp -> VerifyEmail directly). Pending operator decision on whether to build it. Not an oversight. |

---

### Profile

Route: `/profile` (registered, Protected, currently renders `PlaceholderScreen`). 13 screens assigned from Stitch.

AMBIGUITY — Three Profile View Screens: Own Profile, Public Profile, and Profile Preview are three distinct screens. Do NOT treat them as duplicates or variants of each other. Own Profile is the authenticated user's editable view; Public Profile is another user's read-only view; Profile Preview is a lightweight card shown before navigating to the full profile.

AMBIGUITY — Two Achievements Screens: "Achievements" (`b25601c5f3a14d5d8b77068b1c7a5d54`, 780x2126) is a standalone full page. "Achievements Section" (`4a2fe79c7eff405da3579fdbb7e545eb`, 780x3940) is an embedded section likely rendered inside another screen (e.g., Own Profile). These are not the same and should not be conflated.

| Screen Name | Screen ID | Build Status | Notes |
|---|---|---|---|
| Own Profile | `dea731f2d6d046cba33074bea97f0dc7` | Not built | Authenticated user's full profile — editable view |
| Public Profile | `2afba692135d42719f2f1d65ead9bfc9` | Not built | Another user's profile — read-only view |
| Profile Preview | `96974a1bd17340dab744ce7fbbb1af6c` | Not built | Lightweight card before navigating to full profile |
| Create Sports Profile | `36a44b1ec6244d9db3556da84ddc7948` | Not built | Onboarding setup wizard for sports-specific details |
| Profile Completion | `c022afa7e2084368b6bbdba3eaa078d2` | Not built | Progress indicator screen prompting profile completion |
| Edit Profile | `539c8051c32e4e7787bc7233c2aa0730` | Not built | Form to update name, bio, and personal fields |
| Personal Information | `ab64f6d07cdd4308b9e9d5f0524946a4` | Not built | Sub-screen for contact and identity details |
| Playing Information | `c50b8ebdd26e49e088f221712c631fc6` | Not built | Form for position, level, and playing history |
| Profile Picture Upload | `447f102ffc074887858038b1db75698c` | Not built | Camera/gallery picker to set or update avatar |
| Statistics | `a5ab76d056d5477d8dd8f2e0ba0ed81c` | Not built | Charts and performance metrics |
| Achievements | `b25601c5f3a14d5d8b77068b1c7a5d54` | Not built | Full standalone achievements page (780x2126) |
| Achievements Section | `4a2fe79c7eff405da3579fdbb7e545eb` | Not built | Embedded achievements panel within another page (780x3940) — likely inside Own Profile |
| Select Sports | `9dcf3c98d6014b138364c73940b03698` | Not built | Multi-select grid for sports of interest — onboarding |

Profile Settings (`f53e82b64d484729a86a69d17e0619cd`) — see Settings module below; ownership split is pending operator decision.

---

### Social

Route: No dedicated route yet (no Home Feed, Create Post routes registered). 8 buildable screens.

BLOCKER — Post Detail ambiguity: Two separate Stitch entries share the name "Post Detail":
  Post Detail v1: `bc326d7ec976480cb73568c23fcc9bac` (780x2682)
  Post Detail v2: `e91d12a23c784df3973fffe4818d7b34` (780x2454)
The operator must confirm which is authoritative before Social module work begins. Do not assume. Do not implement both.

| Screen Name | Screen ID | Build Status | Notes |
|---|---|---|---|
| Home Feed | `6e6713d235b04d0eb2b65d50e0b87179` | Not built | Primary social feed — needs a route registered |
| Post Detail (v1) | `bc326d7ec976480cb73568c23fcc9bac` | Not built | 780x2682 — see ambiguity flag above |
| Post Detail (v2) | `e91d12a23c784df3973fffe4818d7b34` | Not built | 780x2454 — see ambiguity flag above |
| Empty Feed | `fdaacdf294d243d29a940b171a3fa037` | Not built | Empty state when feed has no content |
| Create Post | `8cacd67b59894b2c9768fa930968233a` | Not built | Composer form to author a new post |
| Sports Community | `d24d1ca83f164c0395059e64a0de57d4` | Not built | Community groups or topic-based discussion listing |
| Connections | `f55432c01428410488ad5899fb5bd953` | Not built | List of followers / following |
| Share Sheet | `52b6aae41f2d42c885e6eb2802970ee2` | Not built | Bottom sheet to share content externally |

---

### Search

Route: `/search` (registered, Protected, currently renders `PlaceholderScreen`). 4 screens.

| Screen Name | Screen ID | Build Status | Notes |
|---|---|---|---|
| Search Home | `c7a5817367f64ef3ba36193b3530f780` | Not built | Default search landing with suggestions/categories |
| Athlete Search | `f5ce6050839b419c8792ef94d655b4ba` | Not built | Search specifically for athlete profiles |
| Search Filters | `1b55904d583948998d4da9b580cd64bc` | Not built | Filter panel to refine search results |
| Empty Search | `bd16514846f54da8aef23cf32a49c779` | Not built | Empty state when search returns no results |

---

### Messaging

Route: `/messages` (registered, Protected, currently renders `PlaceholderScreen`). 2 screens.

| Screen Name | Screen ID | Build Status | Notes |
|---|---|---|---|
| Messages | `e96861ef8d874036840cbf5e3c787634` | Not built | Inbox / conversation list view |
| Private Chat | `0c73ecbd86984b6492c5f13155a694f0` | Not built | Direct messaging thread between two users |

---

### Notifications

Route: `/notifications` (registered, Protected, currently renders `PlaceholderScreen`). 1 screen.

| Screen Name | Screen ID | Build Status | Notes |
|---|---|---|---|
| Notifications | `cb5af3fbadc24b4e8921daec97788808` | Not built | Chronological list of alerts and activity updates |

---

### Settings

Route: `/settings` (registered, Protected, currently renders `PlaceholderScreen`). 1 screen.

Ownership note: "Profile Settings" (`f53e82b64d484729a86a69d17e0619cd`) could belong to either Settings or Profile module. Pending operator decision. Listed here provisionally.

| Screen Name | Screen ID | Build Status | Notes |
|---|---|---|---|
| Profile Settings | `f53e82b64d484729a86a69d17e0619cd` | Not built | Application and account settings panel — module ownership TBD |

---

## Deferred Module Design Assets

These screens exist in the Stitch workspace but belong to Phase 2+ deferred modules. Per Law One (module isolation), they must not be implemented in `src/modules/` until their respective phase is active.

Design reference only — do not implement, module not active per Law One.

| Screen Name | Screen ID | Deferred Module |
|---|---|---|
| Leaderboards | `3b207c1506f040fdb4d7435901209a0d` | Leaderboards (Phase 2) |
| Events Hub | `09124d10bf104ecfb1418abfa4ace1bf` | Events (Phase 2) |

---

## Non-Screen Assets

These entries exist in the Stitch workspace but are not buildable screens. They must never be assigned a route or implemented as standalone screens.

| Asset Name | Screen ID | What It Is | Useful For |
|---|---|---|---|
| SportIQ Brand Logo | `78ae045fc771443c82590079868d1aa5` | 1024x1024 logo image; htmlCode is empty | Source asset for logo img tags across all screens |
| Shader | `42feb90fcc9642d2bcdf4ae98d8a88ec` | 512x512 gradient/shader fragment; no screenshot | Reference when implementing background gradient animations (e.g., Splash or Welcome ambient effects) |
| Loading Experience | `70d4900c5b46473f9311665ed3e69b4d` | Dimensions 100%x100%; reusable loading overlay fragment, not a page | Reference when building a global loading spinner or skeleton shared component |
| SportIQ Design System Specs | `5e1e402a98c0476197927df0ede19819` | Full design token documentation page (780x4432) | Reference for color, typography, and spacing values when cross-checking tokens.css |
| Feed Card Variations (v1) | `2e310dfa955444e7ad225a6d817680ec` | Component library sheet showing card design variants (780x2300) | Reference when building the Social FeedCard shared component |
| Feed Card Variations (v2) | `94c15f7037cb48c8a06ee9a43b2c0b9c` | Duplicate component library sheet (780x2300) | Same as v1 — may represent a later design iteration; compare both before finalising FeedCard |

---

## Shared Component Status

As of codebase inventory 2026-07-25, all 11 shared components are type-stubs only — they contain a types.ts with an empty interface and an index.ts barrel, with no implementation.

PRIMARY CROSS-MODULE BLOCKER: Button and Input prop interfaces must be frozen and implemented before Profile and Social module work begins in parallel. Parallel module work against stub interfaces will result in conflicting assumptions and breaking changes when the real components ship.

| Component | Location | Current Status |
|---|---|---|
| Avatar | `src/shared/components/Avatar/` | Type-stub only — AvatarProps {} |
| Badge | `src/shared/components/Badge/` | Type-stub only — BadgeProps {} |
| Button | `src/shared/components/Button/` | Type-stub only — ButtonProps {} — FREEZE REQUIRED before parallel module work |
| Card | `src/shared/components/Card/` | Type-stub only — CardProps {} |
| ComingSoon | `src/shared/components/ComingSoon/` | Type-stub only — ComingSoonProps {} |
| Dialog | `src/shared/components/Dialog/` | Type-stub only — DialogProps {} |
| EmptyState | `src/shared/components/EmptyState/` | Type-stub only — EmptyStateProps {} |
| Input | `src/shared/components/Input/` | Type-stub only — InputProps {} — FREEZE REQUIRED before parallel module work |
| Loading | `src/shared/components/Loading/` | Type-stub only — LoadingProps {} |
| Tag | `src/shared/components/Tag/` | Type-stub only — TagProps {} |
| Typography | `src/shared/components/Typography/` | Type-stub only — TypographyProps {} |

Note: PlaceholderScreen is the only currently implemented shared component (`src/shared/components/PlaceholderScreen/PlaceholderScreen.tsx`). It is used by all 5 orphaned post-auth placeholder routes.
