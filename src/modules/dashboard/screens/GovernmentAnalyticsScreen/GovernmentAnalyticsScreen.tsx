// STATIC DEMO — visual only, for pitch purposes, not wired to real analytics.
import styles from './GovernmentAnalyticsScreen.module.css';

export function GovernmentAnalyticsScreen() {
  const summaryStats = [
    { id: 'stat-1', label: 'Total Athletes', value: '14,250', icon: 'groups' },
    { id: 'stat-2', label: 'Active Events', value: '124', icon: 'event' },
    { id: 'stat-3', label: 'Engagement Rate', value: '84%', icon: 'monitoring' },
    { id: 'stat-4', label: 'Top District', value: 'Chennai', icon: 'star' },
  ];

  const districtData = [
    { name: 'Chennai', value: 4500, percent: 85 },
    { name: 'Coimbatore', value: 3200, percent: 60 },
    { name: 'Madurai', value: 2800, percent: 52 },
    { name: 'Bengaluru', value: 2100, percent: 40 },
    { name: 'Mumbai', value: 1650, percent: 31 },
  ];

  const sportsPieLegend = [
    { name: 'Cricket', percent: '35%', color: 'var(--color-primary-500)' },
    { name: 'Football', percent: '25%', color: 'var(--color-primary-400)' },
    { name: 'Kabaddi', percent: '20%', color: 'var(--color-primary-300)' },
    { name: 'Athletics', percent: '12%', color: 'var(--color-primary-200)' },
    { name: 'Others', percent: '8%', color: 'var(--color-neutral-300)' },
  ];

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>National Insights</h1>
        <p className={styles.pageSubtitle}>High-level overview of ecosystem growth and participation.</p>
      </header>

      <div className={styles.demoBanner}>
        <span className="material-symbols-outlined">info</span>
        <span>Static Demo: This screen is for visualization and pitch purposes only. Data is not live.</span>
      </div>

      <section className={styles.statsGrid}>
        {summaryStats.map((stat) => (
          <div key={stat.id} className={styles.statCard}>
            <div className={styles.statIconWrapper}>
              <span className={`material-symbols-outlined ${styles.statIcon}`}>{stat.icon}</span>
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statValue}>{stat.value}</span>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Participation by District</h3>
          <div className={styles.barChartContainer}>
            {districtData.map((d) => (
              <div key={d.name} className={styles.barItem}>
                <span className={styles.barLabel}>{d.name}</span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: `${d.percent}%` }}></div>
                </div>
                <span className={styles.barValue}>{d.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Sport-wise Breakdown</h3>
          <div className={styles.pieChartContainer}>
            <div className={styles.pieVisual}>
              <div className={styles.pieVisualInner}></div>
            </div>
            <div className={styles.pieLegend}>
              {sportsPieLegend.map((item) => (
                <div key={item.name} className={styles.legendItem}>
                  <div className={styles.legendColor} style={{ backgroundColor: item.color }}></div>
                  <span className={styles.legendLabel}>{item.name}</span>
                  <span className={styles.legendValue}>{item.percent}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.chartCard} ${styles.fullWidthChart}`}>
          <h3 className={styles.chartTitle}>Monthly Growth (2025-2026)</h3>
          <div className={styles.lineChartContainer}>
            {/* Visual Static Line Chart using SVG */}
            <svg className={styles.lineSvg} viewBox="0 0 1000 200" preserveAspectRatio="none">
              <path 
                className={styles.lineArea} 
                d="M 0 180 L 100 160 L 200 170 L 300 130 L 400 140 L 500 100 L 600 110 L 700 70 L 800 50 L 900 60 L 1000 20 L 1000 200 L 0 200 Z" 
              />
              <path 
                className={styles.linePath} 
                d="M 0 180 L 100 160 L 200 170 L 300 130 L 400 140 L 500 100 L 600 110 L 700 70 L 800 50 L 900 60 L 1000 20" 
              />
              <circle cx="0" cy="180" r="4" className={styles.linePoint} />
              <circle cx="100" cy="160" r="4" className={styles.linePoint} />
              <circle cx="200" cy="170" r="4" className={styles.linePoint} />
              <circle cx="300" cy="130" r="4" className={styles.linePoint} />
              <circle cx="400" cy="140" r="4" className={styles.linePoint} />
              <circle cx="500" cy="100" r="4" className={styles.linePoint} />
              <circle cx="600" cy="110" r="4" className={styles.linePoint} />
              <circle cx="700" cy="70" r="4" className={styles.linePoint} />
              <circle cx="800" cy="50" r="4" className={styles.linePoint} />
              <circle cx="900" cy="60" r="4" className={styles.linePoint} />
              <circle cx="1000" cy="20" r="4" className={styles.linePoint} />
            </svg>
            <div className={styles.xAxis}>
              <span className={styles.xLabel}>Jan</span>
              <span className={styles.xLabel}>Feb</span>
              <span className={styles.xLabel}>Mar</span>
              <span className={styles.xLabel}>Apr</span>
              <span className={styles.xLabel}>May</span>
              <span className={styles.xLabel}>Jun</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
