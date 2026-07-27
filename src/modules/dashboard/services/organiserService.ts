import { supabase } from '../../../core/database/supabaseClient';

export interface DashboardEvent {
  id: string;
  title: string;
  event_date: string;
  location: string;
  sport: string;
}

export async function getUpcomingEvents(): Promise<DashboardEvent[]> {
  const { data, error } = await supabase
    .from('events')
    .select('id, title, event_date, location, sport')
    .gte('event_date', new Date().toISOString())
    .order('event_date', { ascending: true })
    .limit(5);

  if (error) {
    throw error;
  }
  
  return data as DashboardEvent[];
}
