CREATE TABLE public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  event_date timestamptz not null,
  location text,
  sport text,
  created_by uuid references public.profiles(id) not null,
  created_at timestamptz default now()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Anyone authenticated can view all events (operator-confirmed: public
-- to all roles)
CREATE POLICY "Anyone can view events" ON public.events
  FOR SELECT USING (auth.role() = 'authenticated');

-- Only the creator can insert as themselves
CREATE POLICY "Organisers can create their own events" ON public.events
  FOR INSERT WITH CHECK (auth.uid() = created_by);

-- Only the creator can update/delete their own events
CREATE POLICY "Creators can update own events" ON public.events
  FOR UPDATE USING (auth.uid() = created_by);
CREATE POLICY "Creators can delete own events" ON public.events
  FOR DELETE USING (auth.uid() = created_by);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.events TO authenticated;
