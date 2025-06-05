  import { useEffect, useState } from 'react';
  import './Leetcode.css';

  const Leetcode = () => {
    const [stats, setStats] = useState({
      totalSolved: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      totalProblems: {
        easy: 0,
        medium: 0,
        hard: 0,
        total: 0
      },
      loading: true,
      error: null
    });

    useEffect(() => {
      const fetchLeetCodeStats = async () => {
        try {
          const response = await fetch('https://leetcode-stats-api.herokuapp.com/Praveen_1708');
          const data = await response.json();

          if (data.status === 'success' && data.totalSolved !== undefined) {
            animateValue('total-solved', 0, data.totalSolved, 1500);
            animateValue('easy-solved', 0, data.easySolved, 1500);
            animateValue('medium-solved', 0, data.mediumSolved, 1500);
            animateValue('hard-solved', 0, data.hardSolved, 1500);

            setStats({
              totalSolved: data.totalSolved,
              easySolved: data.easySolved,
              mediumSolved: data.mediumSolved,
              hardSolved: data.hardSolved,
              totalProblems: {
                easy: data.totalEasy,
                medium: data.totalMedium,
                hard: data.totalHard,
                total: data.totalQuestions
              },
              loading: false,
              error: null
            });
          }
        } catch (error) {
          console.error('Failed to fetch LeetCode stats:', error);
          setStats(prev => ({
            ...prev,
            loading: false,
            error: 'Failed to load stats'
          }));
        }
      };

      fetchLeetCodeStats();
    }, []);

    const animateValue = (id, start, end, duration) => {
      const obj = document.getElementById(id);
      if (!obj) return;
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const safePercentage = (solved, total) => total ? (solved / total) * 100 : 0;

    return (
      <section id="leetcode" className="leetcode-section">
        <div className="leetcode-container">
          <h2 className="leetcode-title">
            <span>LeetCode</span>
          </h2>

          <div className="leetcode-card">
            {stats.error && (
              <div className="leetcode-error">
                {stats.error} - Showing cached data
              </div>
            )}

            <div className="stats-grid">
              <div className="stat-item total-stat">
                <div id="total-solved" className="stat-value">0</div>
                <div className="stat-label">
                  Total Solved ({stats.totalSolved} / {stats.totalProblems.total})
                </div>
                <div className="stat-icon">📊</div>
              </div>

              <div className="stat-item easy-stat">
                <div id="easy-solved" className="stat-value">0</div>
                <div className="stat-label">
                  Easy ({stats.easySolved} / {stats.totalProblems.easy})
                </div>
                <div className="stat-icon">🍃</div>
              </div>

              <div className="stat-item medium-stat">
                <div id="medium-solved" className="stat-value">0</div>
                <div className="stat-label">
                  Medium ({stats.mediumSolved} / {stats.totalProblems.medium})
                </div>
                <div className="stat-icon">⚖️</div>
              </div>

              <div className="stat-item hard-stat">
                <div id="hard-solved" className="stat-value">0</div>
                <div className="stat-label">
                  Hard ({stats.hardSolved} / {stats.totalProblems.hard})
                </div>
                <div className="stat-icon">💎</div>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${safePercentage(stats.easySolved, stats.totalProblems.easy)}%`,
                    backgroundColor: '#4CAF50'
                  }}
                ></div>
                <div
                  className="progress-fill"
                  style={{
                    width: `${safePercentage(stats.mediumSolved, stats.totalProblems.medium)}%`,
                    backgroundColor: '#FFC107'
                  }}
                ></div>
                <div
                  className="progress-fill"
                  style={{
                    width: `${safePercentage(stats.hardSolved, stats.totalProblems.hard)}%`,
                    backgroundColor: '#F44336'
                  }}
                ></div>
              </div>
            </div>

            <a
              href="https://leetcode.com/Praveen_1708"
              target="_blank"
              rel="noopener noreferrer"
              className="leetcode-button"
            >
              View my LeetCode profile
              <span className="leetcode-icon">→</span>
            </a>
          </div>
        </div>
      </section>
    );
  };

  export default Leetcode;