# Dashboard Module

## Data Status: Real vs Mock
- **Athlete Dashboard**: Uses mock data (`ATHLETE_MOCK_DATA`).
- **Coach Dashboard**: Uses mock data (`COACH_MOCK_DATA`) for stats and schedule. Quick Actions routing is real, with `MY_ATHLETES` rendering the real Coach District Search.
- **Organiser Dashboard**: Uses mock data (`ORGANISER_MOCK_DATA`) for stats and events. Quick Actions routing is real, with `CREATE_EVENT` rendering the real `CreateEventScreen`.
- **Government Dashboard**: Partially real. Stats (Athletes, Coaches, Organizations, Active Events), Top Sports, and Athletes by District chart use REAL Supabase aggregate queries via `analyticsService.ts`. Only the "Recent Activity" section remains mock.

## Associated Stitch Screens
- Athlete Dashboard: `0b0bcd5eb7df40f1a440d18b6c0e1d25`
- Coach Dashboard: `c806e8b69788433483ffab466ad4bd71`
- Organiser Dashboard: `03c76d2b022749369496ed362c229f98`
- Government Dashboard: `8e35604d174d41f1bc256072de7c7f53`
