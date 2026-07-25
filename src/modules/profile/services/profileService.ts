import { supabase } from '../../../core/database/supabaseClient';

/**
 * Updates the user's selected sports in their public.profiles row.
 * Uses an UPDATE (not insert) targeting the current user's ID.
 */
export async function updateSelectedSports(userId: string, sports: string[]): Promise<void> {
  const { error } = await supabase
    .from('profiles')
    .update({ selected_sports: sports })
    .eq('id', userId);

  if (error) {
    throw error;
  }
}
