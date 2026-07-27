# Development Roadmap

This document defines the required build order for SportIQ.

## ACTIVE — MVP Demo Sprint (operator-authorized 2026-07-26)
- Athlete Dashboard (`0b0bcd5eb7df40f1a440d18b6c0e1d25`)
- Coach Dashboard (`c806e8b69788433483ffab466ad4bd71`)
- Organiser Dashboard (`03c76d2b022749369496ed362c229f98`)
- Government Dashboard (`8e35604d174d41f1bc256072de7c7f53`)
- Coach District Search (`4870121b7dc646bab512912d0bf9dff5`)
- Events Module (EventsListScreen, CreateEventScreen — Law Two exception applied: no Stitch trace due to unresolved duplicate-name ambiguity)

> **Note explicitly:** only the single landing dashboard screen per role is in scope for this sprint — all other screens in modules 8-10 (Training Assignment, Team Management, etc.) remain deferred. Dashboard content uses mock/placeholder data for the demo, real data wiring is a documented follow-up.

## Phase 1
Authentication
↓
Profile
↓
Social Feed
↓
Search
↓
Messaging
↓
Notifications
↓
Settings

---

## Phase 2
Achievements
↓
Events
↓
Leaderboard

---

## Phase 3
Coach
↓
Organiser
↓
Government

---

## Phase 4
AI Assessment
↓
Tournament
↓
Analytics
↓
Scheduling
