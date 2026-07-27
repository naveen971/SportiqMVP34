import { supabase } from '../../../core/database/supabaseClient';
import { UserRole } from '../../../core/auth/types';

export interface AthleteSearchResult {
  id: string;
  full_name: string;
  location: string;
  selected_sports: string[];
  primary_position: string | null;
  age: number | null;
}

export interface SearchFilters {
  name?: string;
  regionId?: string;
}

export async function searchAthletes(filters: SearchFilters): Promise<AthleteSearchResult[]> {
  let query = supabase
    .from('profiles')
    .select('id, full_name, location, selected_sports, primary_position, age')
    .eq('role', UserRole.Athlete)
    .eq('onboarding_complete', true);

  if (filters.name && filters.name.trim().length > 0) {
    query = query.ilike('full_name', `%${filters.name.trim()}%`);
  }

  if (filters.regionId && filters.regionId.trim().length > 0) {
    query = query.eq('location', filters.regionId.trim());
  }

  // Order by newest profiles by default
  query = query.order('created_at', { ascending: false });

  const { data, error } = await query;

  if (error) {
    console.error('Error searching athletes:', error);
    throw error;
  }

  return data as AthleteSearchResult[];
}
