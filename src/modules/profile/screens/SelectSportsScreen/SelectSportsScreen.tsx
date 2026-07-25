import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SPORTS_LIST } from '../../constants';
import { SelectedSports } from '../../types';
import styles from './SelectSportsScreen.module.css';

export function SelectSportsScreen() {
  const navigate = useNavigate();
  const [selectedSports, setSelectedSports] = useState<SelectedSports>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleSport = (sportId: string) => {
    setSelectedSports(prev => 
      prev.includes(sportId) 
        ? prev.filter(id => id !== sportId)
        : [...prev, sportId]
    );
  };

  const handleContinue = () => {
    if (selectedSports.length > 0) {
      navigate('/create-sports-profile', { state: { selectedSports } });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const filteredSports = SPORTS_LIST.filter(sport => 
    sport.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {/* TopAppBar */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            <button className={styles.iconBtn} onClick={handleBack} type="button">
              <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
            </button>
            <div className={styles.headerTitle}>SportIQ</div>
          </div>
          
          {/* Progress Bar - Desktop/Tablet */}
          <div className={styles.progressWrapper}>
            <span className={styles.progressLabel}>35%</span>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressFill} style={{ width: '35%' }} />
            </div>
          </div>
          
          <button className={`${styles.iconBtn} sm:hidden`} type="button" style={{ display: 'none' }}>
            {/* Keeping class for visual parity with HTML, though in our CSS it's hidden properly via media query if we added it, but sticking strictly to the design. */}
            <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
          </button>
        </div>
        
        {/* Progress Bar - Mobile */}
        <div className={styles.mobileProgressBarContainer}>
          <div className={styles.progressFill} style={{ width: '35%' }} />
        </div>
      </header>

      <main className={styles.main}>
        <div style={{ marginBottom: 'var(--spacing-6)' }}>
          <h1 className={styles.pageTitle}>Interested Sports</h1>
          <p className={styles.pageSubtitle}>
            Select all the sports you are interested in participating in or following. You can choose multiple.
          </p>
        </div>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <span className={`material-symbols-outlined ${styles.searchIcon}`} data-icon="search">search</span>
          <input 
            type="text"
            className={styles.searchInput}
            placeholder="Search sports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filteredSports.map(sport => {
            const isSelected = selectedSports.includes(sport.id);
            return (
              <button
                key={sport.id}
                type="button"
                className={`${styles.sportCard} ${isSelected ? styles.selected : ''}`}
                onClick={() => handleToggleSport(sport.id)}
              >
                <span className={`material-symbols-outlined ${styles.checkIcon}`} data-icon="check_circle">
                  check_circle
                </span>
                <div className={styles.iconWrapper}>
                  <span className={`material-symbols-outlined ${styles.sportIcon}`} data-icon={sport.icon}>
                    {sport.icon}
                  </span>
                </div>
                <span className={styles.sportName}>{sport.name}</span>
              </button>
            );
          })}
        </div>
      </main>

      {/* Bottom Action Area */}
      <div className={styles.bottomArea}>
        <div className={styles.bottomContent}>
          <button 
            type="button"
            className={styles.continueBtn}
            onClick={handleContinue}
            disabled={selectedSports.length === 0}
            // Prop alignment for future frozen contract swap:
            // variant="primary" size="lg" disabled={...}
          >
            Continue
            <span className={`material-symbols-outlined ${styles.btnIcon}`} data-icon="arrow_forward">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
