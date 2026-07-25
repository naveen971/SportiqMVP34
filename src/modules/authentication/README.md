# Authentication Module

Handles all user-facing authentication screens for SportIQ. No feature logic from other modules belongs here.

---

## Screens

| Screen | Route | File | Stitch ID |
|---|---|---|---|
| Splash Screen | `/splash` | `SplashScreen/SplashScreen.tsx` | `e6284d8b57064d34b643bee9cdeb12c4` |
| Welcome | `/welcome` | `WelcomeScreen/WelcomeScreen.tsx` | `5dd2f754420c452f8661d1a9b739fdb9` |
| Login | `/login` | `LoginScreen/LoginScreen.tsx` | `904ea4a3b2a94ea9b2a95c4a45b702a3` |
| Sign Up | `/signup` | `SignUpScreen/SignUpScreen.tsx` | `1ecbe3fbb0e64da187c25f35ed61722b` |
| Verify Email | `/verify-email` | `VerifyEmailScreen/VerifyEmailScreen.tsx` | `223bbcb17016423580c0ce687e3ce88a` |
| Forgot Password | `/forgot-password` | `ForgotPasswordScreen/ForgotPasswordScreen.tsx` | `aa5f559dd1d140c9bfadb231a301ebf9` |

**Purpose of each screen:**
- **SplashScreen** — Launch screen. Displays logo, wordmark ("SportIQ"), tagline ("Prove Your Standard"), and a shimmer progress bar. Auto-navigates after 2.5 s.
- **WelcomeScreen** — Landing screen shown to unauthenticated users. Contains "Get Started", "Sign In", and "Explore as Guest" CTAs.
- **LoginScreen** — Credential form with email/password, a "Remember Me" checkbox, password visibility toggle, Google login simulation, and a link to Forgot Password.
- **SignUpScreen** — Registration form collecting full name, email, password (with confirmation), and a role selector (Athlete / Coach / Organiser / Govt Official). Persists new accounts to `localStorage`.
- **VerifyEmailScreen** — Post-registration holding screen. Receives the user's email via router `location.state`. Mocks the verification flow; "Open Email App" triggers a 1 s delay then navigates to Login.
- **ForgotPasswordScreen** — Email input form that mocks sending a password reset link. Shows an inline success state on submit; both the default and success states have a "Back to Login" link.

---

## Verified Navigation Flow

Traced from actual `navigate()` and `<Link to=…>` calls in each screen's `.tsx` file:

```
/ → /splash (AppRouter: unauthenticated root redirects to ROUTES.SPLASH)

/splash
  → /welcome   (unauthenticated, after 2500 ms timer)
  → /          (authenticated, after 2500 ms timer)

/welcome
  → /signup    ("Get Started" button)
  → /login     ("Sign In" button)
  → /          ("Explore as Guest" button)

/signup
  → /verify-email  (on successful form submit, passes { state: { email } })
  → /login         (back button in app bar)

/verify-email
  → /login     ("Open Email App" button — mocked, 1 s delay)
  → /login     ("Return to login" button)

/login
  → /              (on successful credential match or Google login)
  → /forgot-password  (<Link> in options row)
  → /signup        (<Link> in footer)

/forgot-password
  → /login     (<Link to={ROUTES.LOGIN}> — present in both default and success states)
```

---

## State Management & Guards

- All authentication screens are wrapped in `<PublicRoute>` in `AppRouter.tsx`. Authenticated users visiting any of these routes are redirected to `/` (Home).
- `AuthProvider` (`src/core/auth/AuthProvider.tsx`) holds the active `User` object (id, name, email, role).
- Login and Google login call `setUser(...)` then navigate to Home. SignUp does **not** call `setUser` — the user remains unauthenticated until they complete email verification and log in manually.
- User accounts are persisted to `localStorage` key `sportiq_users` (mock only; replace with real API before production).

---

## Stitch Design Gaps / Open Items

**Account Created screen** (Stitch ID `f64fb0ec78e149a989612c50b892d55e`): This screen exists in the Stitch workspace but was deliberately not built. The current flow is `SignUp → VerifyEmail` directly, skipping the "Account Created" confirmation step. This is an **open design decision** — not an oversight — and should be revisited before shipping.

**`SplashScreen.module.css` — untokenized `drop-shadow`** (line 51):
```css
filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.05));
```
This raw `rgba()` value has not been replaced with a token because `drop-shadow()` uses different syntax from `box-shadow` (no spread radius), making the existing `--shadow-*` tokens incompatible. A dedicated `--drop-shadow-*` token needs to be added to `tokens.css` before this can be tokenized. Tracked as a non-blocking gap.
