import styles from './TeamManagementScreen.module.css';

// STATIC DEMO DATA: Hardcoded data for Organiser Team Management
const TEAMS = [
  {
    id: '1',
    name: 'Metro Strikers',
    division: 'Div 1',
    coach: 'Sarah Jenkins',
    captain: 'David Miller',
    activePlayers: '24 Active Players',
    status: 'normal',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp-BaT-Icn94u0MacCTmBm7rn4q9M8uBycGbFoIRoYhb3TfRtbe_T0NCnEHqpGWcZ0Ut22R35gHLOY9E86m4FQlc66hlT66a_MucHffNtvpGrgjk-8_vewR125A2a51lEseT76Xs75Z8kXSLEr-Fm69aKWiKO7-mknk_Ztr8hvj1pPrOHfZCBowA3rqCjGTm1s9RTUQSL4otO672FN-vRRm-H2PYRzNJk5rJxJXjennbRw1Rkfh4sW7DLdTbRuHnZyL50lGpWT2_I'
  },
  {
    id: '2',
    name: 'Northern Eagles',
    division: 'Div 1',
    coach: 'Marcus Trent',
    captain: 'Elena Rostova',
    activePlayers: '22 Active Players',
    status: 'normal',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4PuK4x4o3-cjo9vSanpK-ku99Wi_rui-1wqFsg-xYorISaDv_OGPYBjNhq5_UlL9v3vTZ6RpIDekZ1TM06i3vno27YY6lTJo4CiWaXKLPF14nwGvIrwHpv8nMGX3cj9TkOK5l9_RwdmkRTuUaL2NkipD0vE5HARf7MHwFVJ6elMazGrXfES09N3PItNytQVFwPWMAldTzWxfNnSw-xbhfHBfL5h9MjQR0BuZISSPfyuj_qyIJGRyHZBdPyIFXClSf8l3Lruqv7Yc'
  },
  {
    id: '3',
    name: 'Westside City',
    division: 'Incomplete',
    coach: 'Pending',
    captain: 'T. Blake',
    activePlayers: '14 Active Players (Min 18)',
    status: 'error',
    logo: null
  },
  {
    id: '4',
    name: 'South Bay United',
    division: 'Div 2',
    coach: "Liam O'Connor",
    captain: 'J. Smith',
    activePlayers: '20 Active Players',
    status: 'normal',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhXuy3KsqsT704VPbCRoQpdiXqC34mXgcrFrdMEmfoZEpmxNpljncJSzIBg5KasDZa1nG2Da6zwhpWEK-krt8w2L7JyGlfcXxVVkXYBEe_FsNW_tqeEqmGfFXBK9ABX-iojOZ9qgSyvbrAIeXwNPnLr-ELUPonTEyocGS8EtgmTAbaE04q2A1QG39AnnuUIrIU-SqYnBKnqpcJggyHG89IWwE3vsINE_pra2qIFfl_dNuVBiDjSdycfRZaIqKknw8NQacrRNXfcXE'
  }
];

export function TeamManagementScreen() {
  return (
    <main className={styles.container}>
      <section className={styles.header}>
        <div className={styles.headerText}>
          <h2 className={styles.title}>Teams</h2>
          <p className={styles.subtitle}>Manage rosters, coaches, and team settings.</p>
        </div>
        
        <div className={styles.headerActions}>
          <div className={styles.searchWrapper}>
            <span className={`material-symbols-outlined ${styles.searchIcon}`}>search</span>
            <input 
              className={styles.searchInput}
              placeholder="Search teams..." 
              type="text"
            />
          </div>
          
          <button className={styles.filterBtn}>
            <span className={`material-symbols-outlined ${styles.btnIcon}`}>filter_list</span>
            Filter
          </button>
          
          <button className={styles.createBtn}>
            <span className={`material-symbols-outlined ${styles.btnIcon}`}>add</span>
            Create Team
          </button>
        </div>
      </section>

      <section className={styles.grid}>
        {TEAMS.map((team) => (
          <article key={team.id} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardTopLeft}>
                <div className={`${styles.avatar} ${team.status === 'error' ? styles.avatarError : ''}`}>
                  {team.logo ? (
                    <img src={team.logo} alt={team.name} className={styles.avatarImg} />
                  ) : (
                    <div className={styles.avatarFallback}>WC</div>
                  )}
                </div>
                <div>
                  <h3 className={styles.teamName}>{team.name}</h3>
                  <span className={`${styles.divisionBadge} ${team.status === 'error' ? styles.divisionError : ''}`}>
                    {team.status === 'error' && <span className={styles.errorDot}></span>}
                    {team.division}
                  </span>
                </div>
              </div>
              <button className={styles.moreBtn}>
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>

            <div className={styles.cardInfo}>
              <div className={styles.infoRow}>
                <span className={`material-symbols-outlined ${styles.infoIcon}`}>sports</span>
                <p className={styles.infoText}>Coach: {team.coach}</p>
              </div>
              <div className={styles.infoRow}>
                <span className={`material-symbols-outlined ${styles.infoIcon}`}>workspace_premium</span>
                <p className={styles.infoText}>Capt: {team.captain}</p>
              </div>
              <div className={`${styles.infoRow} ${styles.marginTop}`}>
                <span className={`material-symbols-outlined ${styles.infoIcon}`}>group</span>
                <p className={`${styles.infoTextLight} ${team.status === 'error' ? styles.textError : ''}`}>
                  {team.activePlayers}
                </p>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <button className={styles.manageBtn}>Manage Roster</button>
            </div>
          </article>
        ))}
      </section>

      <div className={styles.loadMoreWrap}>
        <button className={styles.loadMoreBtn}>Load More Teams</button>
      </div>
    </main>
  );
}
