import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../../../core/auth/AuthProvider';
import { UserRole } from '../../../../core/auth/types';
import { REGION_LIST } from '../../../../shared/constants/regions';
import { AthleteSearchResult, searchAthletes } from '../../services/athleteSearchService';
import { AthleteResultCard } from '../../components/AthleteResultCard/AthleteResultCard';
import { DashboardSectionHeader } from '../../components/DashboardSectionHeader/DashboardSectionHeader';
import { PlaceholderScreen } from '../../../../shared/components/PlaceholderScreen';
import styles from './CoachAthleteSearchScreen.module.css';

// Simple debounce hook for text input
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

export function CoachAthleteSearchScreen() {
  const { user } = useAuth();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  
  const [results, setResults] = useState<AthleteSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const fetchAthletes = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await searchAthletes({
        name: debouncedSearchTerm,
        regionId: selectedRegion,
      });
      setResults(data);
    } catch (err) {
      setError('Failed to fetch athletes. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [debouncedSearchTerm, selectedRegion]);

  useEffect(() => {
    // Only fetch if the user is authorized
    if (user?.role === UserRole.Coach) {
      fetchAthletes();
    }
  }, [fetchAthletes, user?.role]);

  // Restrict to Coach role only
  if (user?.role !== UserRole.Coach) {
    return (
      <PlaceholderScreen 
        title="Unauthorized" 
        description="This athlete search view is strictly restricted to Coach accounts." 
      />
    );
  }

  return (
    <main className={styles.container}>
      <div className={styles.headerArea}>
        <h2 className={styles.pageTitle}>Athlete Discovery</h2>
        <p className={styles.pageSubtitle}>Search and filter the national talent pipeline based on key performance indicators.</p>
      </div>

      <section className={styles.searchSection}>
        <div className={styles.searchBar}>
          <div className={styles.inputWrapper}>
            <span className={`material-symbols-outlined ${styles.searchIcon}`}>search</span>
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder="Search by athlete name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className={styles.filterButton}>
            <span className="material-symbols-outlined" style={{ marginRight: '8px', fontSize: '18px' }}>tune</span>
            Filters
          </button>
        </div>

        <div className={styles.filtersGrid}>
          <div className={styles.dropdownWrapper}>
            <select 
              className={styles.dropdown}
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="">District: All</option>
              {REGION_LIST.map((region: any) => (
                <option key={region.id} value={region.id}>{region.name}</option>
              ))}
            </select>
            <span className={`material-symbols-outlined ${styles.dropdownIcon}`}>expand_more</span>
          </div>
          
          {/* Static placeholders for visual fidelity to the Stitch design */}
          <div className={styles.dropdownWrapper}>
            <select className={styles.dropdown} disabled>
              <option>Sport: All</option>
            </select>
            <span className={`material-symbols-outlined ${styles.dropdownIcon}`}>expand_more</span>
          </div>
          
          <div className={styles.dropdownWrapper}>
            <select className={styles.dropdown} disabled>
              <option>Age: 16-24</option>
            </select>
            <span className={`material-symbols-outlined ${styles.dropdownIcon}`}>expand_more</span>
          </div>
        </div>
      </section>

      <section className={styles.resultsSection}>
        <div className={styles.resultsHeader}>
          <span className={styles.resultsCount}>
            {isLoading ? 'Searching...' : `Showing ${results.length} prospects`}
          </span>
        </div>

        {error ? (
          <div className={styles.emptyState}>
            <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--color-error-500)' }}>error</span>
            <p className={styles.emptyStateText}>{error}</p>
          </div>
        ) : results.length === 0 && !isLoading ? (
          <div className={styles.emptyState}>
            <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--color-neutral-400)' }}>search_off</span>
            <p className={styles.emptyStateText}>No athletes found in this district matching your criteria.</p>
          </div>
        ) : (
          <div className={styles.resultsGrid}>
            {results.map((athlete) => (
              <AthleteResultCard 
                key={athlete.id} 
                athlete={athlete} 
                onViewProfile={(id) => console.log('View profile', id)}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
