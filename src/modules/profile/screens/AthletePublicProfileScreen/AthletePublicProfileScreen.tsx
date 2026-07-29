import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../../../core/database/supabaseClient';
import { REGION_LIST } from '../../../../shared/constants/regions';
import { AppLayout } from '../../../../shared/layouts/AppLayout';
import styles from './AthletePublicProfileScreen.module.css';

interface AthleteProfile {
  id: string;
  full_name: string;
  role: string;
  selected_sports: string[];
  age: number | null;
  location: string | null;
  primary_position: string | null;
  bio: string | null;
}

// Capitalizes sport IDs (e.g., 'football' -> 'Football')
function formatSportName(sportId: string | undefined): string {
  if (!sportId) return '';
  return sportId.charAt(0).toUpperCase() + sportId.slice(1);
}

// Maps region IDs (e.g., 'na', 'eu', 'asia') back to readable strings
const REGION_MAP: Record<string, string> = REGION_LIST.reduce((acc, region) => {
  acc[region.id] = region.name;
  return acc;
}, {} as Record<string, string>);

export function AthletePublicProfileScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState<AthleteProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      if (!id) return;
      setIsLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('id, full_name, role, selected_sports, age, location, primary_position, bio')
          .eq('id', id)
          .single();

        if (error) {
          if (error.code === 'PGRST116') {
            // Not found or RLS blocked
            setProfile(null);
          } else {
            throw error;
          }
        } else {
          setProfile(data as AthleteProfile);
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Failed to load profile.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, [id]);

  if (isLoading) {
    return (
      <AppLayout>
        <div className={styles.loadingState}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Loading profile...</p>
        </div>
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout>
        <div className={styles.errorState}>
          <span className={`material-symbols-outlined ${styles.errorIcon}`}>error</span>
          <p className={styles.errorText}>{error}</p>
          <button className={styles.retryButton} onClick={() => window.location.reload()}>Retry</button>
        </div>
      </AppLayout>
    );
  }

  if (!profile) {
    return (
      <AppLayout>
        <div className={styles.notFoundState}>
          <span className={`material-symbols-outlined ${styles.notFoundIcon}`}>person_off</span>
          <p className={styles.notFoundText}>Athlete not found or not visible.</p>
          <button className={styles.backToSearchButton} onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </AppLayout>
    );
  }

  const sportDisplay = (profile.selected_sports && profile.selected_sports.length > 0) 
    ? formatSportName(profile.selected_sports[0]) 
    : 'Athlete';
    
  const locationDisplay = profile.location ? (REGION_MAP[profile.location] || profile.location) : 'Location unknown';
  
  const initials = profile.full_name
    ? profile.full_name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    : 'A';

  return (
    <AppLayout>
      <main className={styles.container}>
        <header className={styles.header}>
          <button className={styles.backButton} onClick={() => navigate(-1)} aria-label="Go back">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className={styles.pageTitle}>Public Profile</h1>
        </header>

        <section className={styles.glassCard}>
          <div className={styles.profileTop}>
            <div className={styles.avatar}>
              {initials}
            </div>
            
            <div className={styles.profileInfo}>
              <div className={styles.nameRow}>
                <h2 className={styles.name}>{profile.full_name || 'Unnamed Athlete'}</h2>
                <span className={`material-symbols-outlined ${styles.verifiedIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              
              <p className={styles.roleSubtitle}>
                {profile.primary_position ? `${sportDisplay} • ${profile.primary_position}` : sportDisplay}
              </p>
              
              <div className={styles.tagsRow}>
                <span className={`${styles.tag} ${styles.primary}`}>
                  <span className={`material-symbols-outlined ${styles.tagIcon}`}>sports</span>
                  {profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}
                </span>
                {profile.age && (
                  <span className={styles.tag}>
                    <span className={`material-symbols-outlined ${styles.tagIcon}`}>cake</span>
                    {profile.age} yrs
                  </span>
                )}
                <span className={styles.tag}>
                  <span className={`material-symbols-outlined ${styles.tagIcon}`}>location_on</span>
                  {locationDisplay}
                </span>
              </div>
            </div>
          </div>
          
          {profile.bio && (
            <div className={styles.bioSection}>
              <p className={styles.bioText}>{profile.bio}</p>
            </div>
          )}
        </section>
      </main>
    </AppLayout>
  );
}
