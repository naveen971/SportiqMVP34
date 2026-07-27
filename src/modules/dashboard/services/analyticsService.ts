import { supabase } from '../../../core/database/supabaseClient';
import { UserRole } from '../../../core/auth/types';

export interface DashboardAnalytics {
  totalAthletes: number;
  totalCoaches: number;
  totalOrganisers: number;
  totalEvents: number;
  athletesBySport: { name: string; count: number }[];
  athletesByDistrict: { name: string; count: number }[];
}

export async function getGovernmentAnalytics(): Promise<DashboardAnalytics> {
  // Fetch counts for each role
  const [{ count: athletesCount }, { count: coachesCount }, { count: organisersCount }, { count: eventsCount }] = await Promise.all([
    supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', UserRole.Athlete),
    supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', UserRole.Coach),
    supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', UserRole.Organiser),
    supabase.from('events').select('*', { count: 'exact', head: true })
  ]);

  // Fetch all athletes to aggregate sports and districts locally (since we lack a grouping RPC)
  const { data: athletes, error } = await supabase
    .from('profiles')
    .select('selected_sports, location')
    .eq('role', UserRole.Athlete);

  if (error) {
    console.error('Error fetching analytics:', error);
    throw error;
  }

  const sportCounts: Record<string, number> = {};
  const districtCounts: Record<string, number> = {};

  if (athletes) {
    for (const athlete of athletes) {
      // Aggregate Districts
      if (athlete.location) {
        districtCounts[athlete.location] = (districtCounts[athlete.location] || 0) + 1;
      }
      // Aggregate Sports
      if (athlete.selected_sports && Array.isArray(athlete.selected_sports)) {
        for (const sport of athlete.selected_sports) {
          sportCounts[sport] = (sportCounts[sport] || 0) + 1;
        }
      }
    }
  }

  // Sort sports by count descending
  const topSports = Object.entries(sportCounts)
    .map(([name, count]) => ({ name: name.charAt(0).toUpperCase() + name.slice(1), count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3); // top 3

  // Sort districts by count descending (we can use this for the trend chart replacement)
  const topDistricts = Object.entries(districtCounts)
    .map(([name, count]) => ({ name: name.toUpperCase(), count }))
    .sort((a, b) => b.count - a.count);

  return {
    totalAthletes: athletesCount || 0,
    totalCoaches: coachesCount || 0,
    totalOrganisers: organisersCount || 0,
    totalEvents: eventsCount || 0,
    athletesBySport: topSports,
    athletesByDistrict: topDistricts
  };
}
