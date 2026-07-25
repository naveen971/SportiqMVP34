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

/**
 * Uploads a profile picture to Supabase Storage and updates the user's profile row.
 * Reusable function callable from onboarding or settings.
 * 
 * @param userId The user's ID
 * @param file The file to upload
 * @returns The public URL of the uploaded avatar
 */
export async function updateAvatarUrl(userId: string, file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const filePath = `${userId}/avatar-${Date.now()}.${fileExt}`;

  // 1. Upload to Supabase Storage (PENDING BUCKET CREATION)
  // If the 'avatars' bucket does not exist, this will throw a StorageError
  // which is expected until the operator creates the bucket manually.
  const { error: uploadError, data } = await supabase.storage
    .from('avatars')
    .upload(filePath, file, { upsert: true });

  if (uploadError) {
    throw uploadError;
  }

  // 2. Get the public URL for the newly uploaded file
  const { data: publicUrlData } = supabase.storage
    .from('avatars')
    .getPublicUrl(filePath);

  const avatarUrl = publicUrlData.publicUrl;

  // 3. Update the profiles table with the new avatar_url
  const { error: updateError } = await supabase
    .from('profiles')
    .update({ avatar_url: avatarUrl })
    .eq('id', userId);

  if (updateError) {
    throw updateError;
  }

  return avatarUrl;
}
