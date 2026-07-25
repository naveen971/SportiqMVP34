-- Migration 002: Add bio and avatar_url columns to public.profiles
-- Corresponds to fields collected in CreateSportsProfileScreen.tsx.
--
-- NOTE: bio_length CHECK constraint is intentionally included even though
-- the client already enforces maxLength={500}. The DB constraint is the
-- last line of defence against a non-browser client (mobile app, API call,
-- or future admin script) bypassing the UI validation. Both can coexist
-- without redundancy — the client check improves UX (instant feedback),
-- the DB check guarantees data integrity regardless of origin.

ALTER TABLE public.profiles
  ADD COLUMN bio text,
  ADD COLUMN avatar_url text,
  ADD CONSTRAINT bio_length CHECK (char_length(bio) <= 500);
