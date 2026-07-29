import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../routing/routes';
import styles from './CreateTournamentScreen.module.css';

// STATIC DEMO DATA: This screen uses hardcoded form elements matching Stitch ID d915428c02284593997022652a8fed94
export function CreateTournamentScreen() {
  const navigate = useNavigate();
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (startDate && endDate && endDate < startDate) {
      setError('End date cannot be before start date.');
      return;
    }

    if (startDate) {
      const startYear = parseInt(startDate.split('-')[0] || '', 10);
      if (startYear < 2026 || startYear > 2028) {
        setError('Tournament start year must be between 2026 and 2028.');
        return;
      }
    }

    if (endDate) {
      const endYear = parseInt(endDate.split('-')[0] || '', 10);
      if (endYear < 2026 || endYear > 2028) {
        setError('Tournament end year must be between 2026 and 2028.');
        return;
      }
    }

    // Success static demo flow
    console.log('Tournament valid');
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <button 
          className={styles.backBtn}
          onClick={() => navigate(ROUTES.HOME)}
        >
          <span className={`material-symbols-outlined ${styles.backIcon}`}>arrow_back</span>
          <span>Back to Dashboard</span>
        </button>
        <h1 className={styles.title}>Create Tournament</h1>
        <p className={styles.subtitle}>Step 1 of 3: Basic Information</p>
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.progressFill}></div>
        <div className={styles.progressEmpty}></div>
        <div className={styles.progressEmpty}></div>
      </div>

      <form className={styles.formContainer} onSubmit={handleSubmit}>
        {error && <div className={styles.errorAlert}>{error}</div>}
        <div className={styles.uploadBanner}>
          <span className={`material-symbols-outlined ${styles.uploadIcon}`}>add_photo_alternate</span>
          <span className={styles.uploadTitle}>Upload Tournament Banner</span>
          <span className={styles.uploadSubtitle}>Recommended size: 1200x400px</span>
        </div>

        <div className={styles.formGrid}>
          <div className={`${styles.fieldGroup} ${styles.colSpanFull}`}>
            <label className={styles.label}>
              Tournament Name <span className={styles.required}>*</span>
            </label>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="e.g. Summer Cup 2024" 
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              Sport <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <select className={styles.select} defaultValue="">
                <option value="" disabled>Select a sport</option>
                <option value="football">Football</option>
                <option value="basketball">Basketball</option>
                <option value="tennis">Tennis</option>
                <option value="volleyball">Volleyball</option>
              </select>
              <span className={`material-symbols-outlined ${styles.selectIcon}`}>expand_more</span>
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Age Category</label>
            <div className={styles.inputWrapper}>
              <select className={styles.select} defaultValue="open">
                <option value="open">Open (All Ages)</option>
                <option value="u18">Under 18</option>
                <option value="u16">Under 16</option>
                <option value="adult">Adult (18+)</option>
                <option value="senior">Senior (35+)</option>
              </select>
              <span className={`material-symbols-outlined ${styles.selectIcon}`}>expand_more</span>
            </div>
          </div>
        </div>

        <div className={styles.formGrid}>
          <div className={`${styles.fieldGroup} ${styles.colSpanFull}`}>
            <label className={styles.label}>Primary Venue</label>
            <div className={styles.inputWrapper}>
              <span className={`material-symbols-outlined ${styles.inputIcon}`}>location_on</span>
              <input 
                type="text" 
                className={`${styles.input} ${styles.inputWithIcon}`} 
                placeholder="Search for sports complex, stadium, or address..." 
              />
            </div>
          </div>

          <div className={`${styles.fieldGroup} ${styles.colSpanFull}`}>
            <label className={styles.label}>
              Registration Window <span className={styles.required}>*</span>
            </label>
            <div className={styles.dateGroup}>
              <div className={styles.inputWrapper}>
                <span className={`material-symbols-outlined ${styles.inputIcon}`}>calendar_today</span>
                <input 
                  type="date" 
                  className={`${styles.input} ${styles.inputWithIcon}`}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min="2026-01-01"
                  max="2028-12-31"
                  required
                />
              </div>
              <span className={styles.dateSeparator}>to</span>
              <div className={styles.inputWrapper}>
                <span className={`material-symbols-outlined ${styles.inputIcon}`}>calendar_today</span>
                <input 
                  type="date" 
                  className={`${styles.input} ${styles.inputWithIcon}`}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate || "2026-01-01"}
                  max="2028-12-31"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formatSection}>
          <label className={styles.label}>
            Tournament Format <span className={styles.required}>*</span>
          </label>
          <div className={styles.formatGrid}>
            <label className={styles.radioLabel}>
              <input type="radio" name="format" value="league" className={styles.radioInput} defaultChecked />
              <div className={styles.radioCard}>
                <span className={`material-symbols-outlined ${styles.radioIcon}`}>format_list_numbered</span>
                <div>
                  <div className={styles.radioTitle}>League</div>
                  <div className={styles.radioDesc}>Round-robin format where all teams play each other.</div>
                </div>
              </div>
            </label>
            
            <label className={styles.radioLabel}>
              <input type="radio" name="format" value="knockout" className={styles.radioInput} />
              <div className={styles.radioCard}>
                <span className={`material-symbols-outlined ${styles.radioIcon}`}>account_tree</span>
                <div>
                  <div className={styles.radioTitle}>Knockout</div>
                  <div className={styles.radioDesc}>Single elimination bracket tournament.</div>
                </div>
              </div>
            </label>

            <label className={styles.radioLabel}>
              <input type="radio" name="format" value="group" className={styles.radioInput} />
              <div className={styles.radioCard}>
                <span className={`material-symbols-outlined ${styles.radioIcon}`}>grid_view</span>
                <div>
                  <div className={styles.radioTitle}>Group Stage</div>
                  <div className={styles.radioDesc}>Mini-leagues followed by knockout rounds.</div>
                </div>
              </div>
            </label>

            <label className={styles.radioLabel}>
              <input type="radio" name="format" value="hybrid" className={styles.radioInput} />
              <div className={styles.radioCard}>
                <span className={`material-symbols-outlined ${styles.radioIcon}`}>shuffle</span>
                <div>
                  <div className={styles.radioTitle}>Hybrid</div>
                  <div className={styles.radioDesc}>Custom structure mixing multiple formats.</div>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className={`${styles.fieldGroup} ${styles.maxTeamsGroup}`}>
          <label className={styles.label}>Maximum Teams</label>
          <input 
            type="number" 
            className={styles.input} 
            min="2" 
            placeholder="e.g. 16" 
          />
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.btnSecondary}>Save Draft</button>
          <button type="submit" className={styles.btnPrimary}>
            Continue
            <span className={`material-symbols-outlined ${styles.btnIcon}`}>arrow_forward</span>
          </button>
        </div>
      </form>
    </main>
  );
}
