-- Grant service_role access to public.profiles
-- Note: Tables created manually via the SQL Editor do not automatically inherit 
-- Supabase's default auto-grants (unlike tables created via the Table Editor UI).
-- This grant ensures the service_role key has the necessary privileges to read/write 
-- the profiles table, which is required for admin scripts (like seed-demo-athletes) 
-- that bypass RLS.
GRANT ALL ON public.profiles TO service_role;
