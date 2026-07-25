import { supabase } from '../../../core/database/supabaseClient';

export interface ProfileOnboardingPayload {
  selectedSports: string[];
  bio: string;
  // avatar_url is intentionally omitted here — file upload to Supabase Storage
  // is a separate future task. The UI collects the file but we do not persist
  // it until a storage bucket and upload flow are implemented.
}

/**
 * Writes onboarding profile data (selected sports + bio) to the user's
 * public.profiles row. Uses UPDATE (not insert) — the row already exists
 * from the signup trigger. Avatar URL is not persisted here; see above.
 */
export async function updateProfileOnboarding(
  userId: string,
  payload: ProfileOnboardingPayload
): Promise<void> {
  const { error } = await supabase
    .from('profiles')
    .update({
      selected_sports: payload.selectedSports,
      bio: payload.bio,
    })
    .eq('id', userId);

  if (error) {
    throw error;
  }
}
