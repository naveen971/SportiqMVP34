# Events Module

## Data Status: Real vs Mock
This module is fully real and connected to Supabase. It does not use any mock data. 
- `EventsListScreen` displays events fetched from the database.
- `CreateEventScreen` inserts real event data into the database.

## Law Two Exception
This module was built with an EXPLICIT LAW TWO EXCEPTION (operator-authorized 2026-07-26/27). It was built without tracing to specific Stitch screens due to unresolved duplicate-name ambiguities in the design files (multiple "Events Hub" and "Event Details" variants). 

## Migration Status
The module relies on `supabase/migrations/006_create_events_table.sql`.
**Status**: Pending operator action. Based on code evidence, the migration script has been created but must be manually applied by the operator in the Supabase SQL Editor for the module to function correctly.
