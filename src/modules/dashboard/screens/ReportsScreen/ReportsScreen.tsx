import styles from './ReportsScreen.module.css';

// STATIC DEMO DATA: This screen uses hardcoded data to match the Stitch design.
const REPORT_HISTORY = [
  {
    id: '1',
    title: 'Q3 Organization Stats',
    meta: 'Excel • 2.4 MB',
    status: 'Ready',
    statusType: 'success',
    date: 'Today, 09:41 AM',
    action: 'download'
  },
  {
    id: '2',
    title: 'National Athlete Demographics',
    meta: 'PDF • Generating...',
    status: 'Processing',
    statusType: 'processing',
    progress: 45
  },
  {
    id: '3',
    title: 'U18 Tournament Results',
    meta: 'CSV • 145 KB',
    status: 'Ready',
    statusType: 'success',
    date: 'Yesterday, 14:22 PM',
    action: 'download'
  }
];

export function ReportsScreen() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Reports &amp; Exports</h1>
          <p className={styles.subtitle}>Generate, view, and export systemic data reports.</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.filterBtn}>
            <span className={`material-symbols-outlined ${styles.iconSm}`}>filter_list</span>
            <span>Filter</span>
          </button>
          <button className={styles.newBtn}>
            <span className={`material-symbols-outlined ${styles.iconSm}`}>add</span>
            <span>New Template</span>
          </button>
        </div>
      </header>

      <div className={styles.grid}>
        <section className={styles.generateSection}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>
              <span className={`material-symbols-outlined ${styles.primaryIcon} ${styles.iconSm}`}>add_box</span>
              Generate Report
            </h2>

            <div className={styles.templatesGrid}>
              <div className={styles.templateCard}>
                <span className={`material-symbols-outlined ${styles.templateIcon}`}>directions_run</span>
                <h3 className={styles.templateTitle}>Athlete</h3>
                <p className={styles.templateDesc}>Performance &amp; Demographics</p>
              </div>
              <div className={`${styles.templateCard} ${styles.templateCardActive}`}>
                <div className={styles.activeCheck}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <span className={`material-symbols-outlined ${styles.templateIcon}`}>corporate_fare</span>
                <h3 className={styles.templateTitle}>Organization</h3>
                <p className={styles.templateDesc}>Club &amp; Federation Stats</p>
              </div>
              <div className={styles.templateCard}>
                <span className={`material-symbols-outlined ${styles.templateIcon}`}>event</span>
                <h3 className={styles.templateTitle}>Event</h3>
                <p className={styles.templateDesc}>Attendance &amp; Outcomes</p>
              </div>
              <div className={styles.templateCard}>
                <span className={`material-symbols-outlined ${styles.templateIcon}`}>emoji_events</span>
                <h3 className={styles.templateTitle}>Tournament</h3>
                <p className={styles.templateDesc}>Brackets &amp; Results</p>
              </div>
              <div className={styles.templateCard}>
                <span className={`material-symbols-outlined ${styles.templateIcon}`}>groups</span>
                <h3 className={styles.templateTitle}>Participation</h3>
                <p className={styles.templateDesc}>Regional Engagement</p>
              </div>
            </div>

            <div className={styles.exportFormat}>
              <h3 className={styles.formatLabel}>Export Format</h3>
              <div className={styles.formatButtons}>
                <button className={styles.formatBtn}>
                  <span className={`material-symbols-outlined ${styles.iconXs}`}>description</span> CSV
                </button>
                <button className={`${styles.formatBtn} ${styles.formatBtnActive}`}>
                  <span className={`material-symbols-outlined ${styles.iconXs}`}>table_chart</span> Excel
                </button>
                <button className={styles.formatBtn}>
                  <span className={`material-symbols-outlined ${styles.iconXs}`}>picture_as_pdf</span> PDF
                </button>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.cancelBtn}>Cancel</button>
              <button className={styles.generateBtn}>
                <span className={`material-symbols-outlined ${styles.iconXs}`}>play_arrow</span> Generate Report
              </button>
            </div>
          </div>
        </section>

        <section className={styles.historySection}>
          <div className={styles.card}>
            <div className={styles.historyHeader}>
              <h2 className={styles.sectionTitle}>Report History</h2>
              <button className={styles.viewAllBtn}>View All</button>
            </div>
            
            <div className={styles.historyList}>
              {REPORT_HISTORY.map((report) => (
                <div key={report.id} className={`${styles.historyItem} ${report.statusType === 'processing' ? styles.historyItemProcessing : ''}`}>
                  <div className={styles.historyItemTop}>
                    <div>
                      <h4 className={styles.historyTitle}>{report.title}</h4>
                      <p className={styles.historyMeta}>{report.meta}</p>
                    </div>
                    <span className={report.statusType === 'success' ? styles.badgeSuccess : styles.badgeProcessing}>
                      {report.statusType === 'processing' && <span className={`material-symbols-outlined ${styles.spinIcon}`}>sync</span>}
                      {report.status}
                    </span>
                  </div>
                  
                  {report.statusType === 'processing' ? (
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: `${report.progress}%` }}></div>
                    </div>
                  ) : (
                    <div className={styles.historyItemBottom}>
                      <span className={styles.historyDate}>{report.date}</span>
                      <button className={styles.downloadBtn}>
                        <span className={`material-symbols-outlined ${styles.iconSm}`}>download</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
