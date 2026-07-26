-- Migration 005: Add personal and playing information fields to public.profiles
-- Covers fields stopgapped in sessionStorage during Personal Information (Step 2/4)
-- and Playing Information (Step 3/4) onboarding screens.
--
-- APPLY MANUALLY: Supabase Dashboard → SQL Editor → Run this file.
-- This migration MUST be applied before the Profile Completion screen's
-- persistence logic can successfully write all onboarding data.
--
-- Note on primary_position: Intentionally plain text, not an enum.
-- Soccer-specific positions (Forward, Midfielder, Defender, Goalkeeper)
-- are an MVP shortcut. A per-sport position mapping is future work.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS location text,
  ADD COLUMN IF NOT EXISTS age integer CHECK (age IS NULL OR (age > 0 AND age < 120)),
  ADD COLUMN IF NOT EXISTS height_cm numeric CHECK (height_cm IS NULL OR (height_cm > 0 AND height_cm < 300)),
  ADD COLUMN IF NOT EXISTS weight_kg numeric CHECK (weight_kg IS NULL OR (weight_kg > 0 AND weight_kg < 400)),
  ADD COLUMN IF NOT EXISTS dominant_foot text CHECK (dominant_foot IS NULL OR dominant_foot IN ('left', 'right', 'both')),
  ADD COLUMN IF NOT EXISTS primary_position text,
  ADD COLUMN IF NOT EXISTS years_of_experience integer CHECK (years_of_experience IS NULL OR years_of_experience >= 0);

-- Re-state grants idempotently to guard against 42501 permission errors
-- if the table was ever recreated or grants were reset.
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
