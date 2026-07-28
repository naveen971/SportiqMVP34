import styles from './LeaderboardsScreen.module.css';

// STATIC DEMO DATA: This screen uses hardcoded data to match the Stitch design.
const TOP_THREE = [
  { rank: 2, name: 'M. Chen', score: '94.2', trend: 'up', trendVal: '1.2', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDwHLmcTz3Ghj7bnfukxUCMgs7u8lr_YOYaIZM1xhEigbqBZjvbJG67mELv0UWW55c9aFNxwjt6-Or2zmTbtig6dt76sULKInLiJxEgNiwzYMIVLo1yD6m9k4r0-S8QGvin7f2_5_719q0e3KZexY-ala_Nhyo_RVDrMwFDKs-pLFfBAXHMMtrrx1jfLxf8CnuXcTdN1CtbGBbuvYdlP42WtsyDbbMqDGoanHCmQQyuaFpchu_XTSOSVbByxly1wV4VOhbW71YfrM' },
  { rank: 1, name: 'J. Davis', score: '98.5', trend: 'flat', trendVal: '0.0', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8sW4_JSLDtpYx9SvrW5BPXtEmFZbVnPsfrHZGouL8VYe2Nl5qarHz2hUTaXzTC-SDZvcJtz53EBL_sGsTTTi04iJ-qxL7a_CX87ZFSQWy3EA0Rcx0R8If8yd7ywSc4EzuwevyvY8E9ODlGvXgHTvTNbV95ri5MfqjQGZQ3LzH_0FZAUwMJGVyLo9R8u-AKnrZbuv-tcNiHL-5eDR8sRumEvqpo9UujaTTROg62ftDt-K0Qk_KCiTrIR6O1QUEKpidpJLEaq8nuJ0' },
  { rank: 3, name: 'A. Silva', score: '91.8', trend: 'up', trendVal: '2.4', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMr55cfVAwHvbu_7jLLBonzzoFEyYs1U0iJYykstdts8hTwpKw_Fw4PiK7UjEHGvtDD6VKyCUXJd1RIqJr3M4oJo3maZCjQkB5GCt91fomxQry2O1yfr0wpYHt8SSjFILZXH7TDTPCF4cpyb9Ur3dY-t7RZLSr7htFIvwQ0sUESnMQdvZ7agg28jtYvqPWbcltuLaz0nqvWIgyQeyGmmwtV00Imh8o7gGkYpMsC7uG2hA6rYUvipMGWW9FtA_fVAd9XdfVF-m92CI' }
];

const OTHERS = [
  { rank: 4, name: 'S. Williams', score: '89.4', trend: 'down', trendVal: '-0.5', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXKLz1DxG-9qRcyIFH3nLVGi0n6Y0eafcKkb-qAWxzGDl1yg1iCQ_95SXTixBNnanFOrKSmuHMfHZ3wVMjaLCx0umNmmbGpj2FJu9c_qvMM0H3xmsqOVQ1QCzbJo3sNFey3VJCOR2BtUKrw0eUuX78yOxcZDk7kLXWs-nF-brRKYpDriHhCob0NxR9o6fvpTkBeY3YohAcLQKLnbtnS3aMh9UEpBE24Yg_TZ_gfyWxEv9JxMeg0U5ak7aqP_vlMustf5xYDtJYS0Q' },
  { rank: 5, name: 'E. Martinez', score: '88.7', trend: 'up', trendVal: '+1.1', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCMM6xdQt3XjqEb0EI8vCUgPsY37PV74ezsuGm-H_OFVvwSx53FzJ5nbc4aLM0gBNLqhumt1_AHJXXxzTnrZ3JGTrZ71TFy-GD4oi2DsN2z5WtSoVI_d0J6tPC873t0cWttTNnetj2scj_ykZgK8xmlzz6Z7X6MV-2MNuJynkHJtjizz-83E_fgkoZEh4kqTXBXXz-GtqxnRfDtpGOgW3kDfRSDNGpCd1ONrnsj6lJszfpKAyjUJ-JZ74gazgPetcCWtvPgLI5SgQ' },
  { rank: 6, name: 'L. Kim', score: '87.2', trend: 'flat', trendVal: '0.0' }
];

export function LeaderboardsScreen() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Season Leaderboard</h2>
          <p className={styles.subtitle}>Global ranking based on overall SportIQ.</p>
        </div>
        <div className={styles.toggleGroup}>
          <button className={styles.toggleBtnActive}>Global</button>
          <button className={styles.toggleBtn}>Regional</button>
        </div>
      </header>

      <section className={styles.podiumSection}>
        {TOP_THREE.map((athlete) => (
          <div key={athlete.rank} className={athlete.rank === 1 ? styles.podiumCardFirst : styles.podiumCardRest}>
            <div className={styles.podiumAvatarWrapper}>
              <div className={styles.podiumAvatarRel}>
                <img src={athlete.img} alt={athlete.name} className={styles.podiumAvatar} />
                <div className={`${styles.podiumRankBadge} ${athlete.rank === 1 ? styles.rank1 : athlete.rank === 2 ? styles.rank2 : styles.rank3}`}>
                  {athlete.rank}
                </div>
              </div>
            </div>
            <div className={styles.podiumInfo}>
              <h3 className={styles.podiumName}>{athlete.name}</h3>
              <p className={athlete.rank === 1 ? styles.podiumScoreFirst : styles.podiumScore}>{athlete.score}</p>
              <span className={styles.trendInfo}>
                {athlete.trend === 'up' && <span className={`material-symbols-outlined ${styles.trendIconUp}`}>arrow_upward</span>}
                {athlete.trend === 'flat' && <span className={`material-symbols-outlined ${styles.trendIconFlat}`}>horizontal_rule</span>}
                {athlete.trend === 'down' && <span className={`material-symbols-outlined ${styles.trendIconDown}`}>arrow_downward</span>}
                {athlete.trendVal}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.listSection}>
        {OTHERS.map((athlete) => (
          <div key={athlete.rank} className={styles.listItem}>
            <div className={styles.listLeft}>
              <span className={styles.listRank}>{athlete.rank}</span>
              {athlete.img ? (
                <img src={athlete.img} alt={athlete.name} className={styles.listAvatar} />
              ) : (
                <div className={styles.listAvatarFallback}>{athlete.name.charAt(0)}</div>
              )}
              <span className={styles.listName}>{athlete.name}</span>
            </div>
            <div className={styles.listRight}>
              <span className={styles.listScore}>{athlete.score}</span>
              <div className={styles.listTrendWrap}>
                <span className={athlete.trend === 'up' ? styles.trendTextUp : athlete.trend === 'down' ? styles.trendTextDown : styles.trendTextFlat}>
                  {athlete.trendVal}
                </span>
                {athlete.trend === 'up' && <span className={`material-symbols-outlined ${styles.trendIconUp}`}>arrow_upward</span>}
                {athlete.trend === 'flat' && <span className={`material-symbols-outlined ${styles.trendIconFlat}`}>horizontal_rule</span>}
                {athlete.trend === 'down' && <span className={`material-symbols-outlined ${styles.trendIconDown}`}>arrow_downward</span>}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
