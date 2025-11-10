import { currentUser, mockBadges, mockAchievements } from '../data/mockData';
import './Profile.css';

export default function Profile() {
  const user = currentUser;
  const xpPercentage = (user.xp / user.xpToNextLevel) * 100;

  return (
    <div className="profile-page">
      <div className="retro-panel">
        <div className="retro-panel-title">
          <span>👤 Profile</span>
        </div>
        <div className="retro-panel-content">
          <div className="profile-header">
            <div className="profile-avatar">{user.avatar}</div>
            <div className="profile-info">
              <h1 className="rainbow-text">{user.displayName}</h1>
              <p style={{ color: '#666', marginBottom: '8px' }}>@{user.username}</p>
              <div className="level-badge">
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Level {user.level}</span>
              </div>
            </div>
          </div>

          <div className="xp-bar-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '14px' }}>
              <span>XP Progress</span>
              <span>
                {user.xp} / {user.xpToNextLevel} XP
              </span>
            </div>
            <div className="xp-bar">
              <div className="xp-bar-fill" style={{ width: `${xpPercentage}%` }}>
                <div className="xp-bar-shine"></div>
              </div>
            </div>
            <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
              {user.xpToNextLevel - user.xp} XP to level {user.level + 1}!
            </p>
          </div>

          <div className="profile-stats">
            <div className="stat-card">
              <div className="stat-value">{user.websitesCreated}</div>
              <div className="stat-label">Websites</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{user.totalVisits}</div>
              <div className="stat-label">Total Visits</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{user.badges.length}</div>
              <div className="stat-label">Badges</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{user.achievements.filter((a) => a.completed).length}</div>
              <div className="stat-label">Achievements</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <div className="retro-panel">
          <div className="retro-panel-title">
            <span>🎖️ Badges ({user.badges.length})</span>
          </div>
          <div className="retro-panel-content">
            {user.badges.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#666', padding: '20px' }}>
                No badges yet! Complete achievements to unlock badges.
              </p>
            ) : (
              <div className="badges-grid">
                {user.badges.map((badge) => (
                  <div key={badge.id} className={`badge-card badge-card-${badge.rarity}`}>
                    <div className="badge-icon">{badge.icon}</div>
                    <div className="badge-name">{badge.name}</div>
                    <div className="badge-description">{badge.description}</div>
                    <div className={`badge-rarity rarity-${badge.rarity}`}>{badge.rarity.toUpperCase()}</div>
                    {badge.unlockedAt && (
                      <div className="badge-date">
                        Unlocked: {badge.unlockedAt.toLocaleDateString()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="retro-panel">
          <div className="retro-panel-title">
            <span>🏆 Achievements</span>
          </div>
          <div className="retro-panel-content">
            {mockAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`achievement-card ${achievement.completed ? 'completed' : ''}`}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                  <div>
                    <div className="achievement-name">
                      {achievement.completed && <span>✅ </span>}
                      {achievement.name}
                    </div>
                    <div className="achievement-description">{achievement.description}</div>
                  </div>
                  <div className="achievement-xp">+{achievement.xpReward} XP</div>
                </div>
                <div className="achievement-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${Math.min((achievement.progress / achievement.total) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="progress-text">
                    {achievement.progress} / {achievement.total}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="retro-panel" style={{ marginTop: '20px' }}>
        <div className="retro-panel-title">
          <span>🌟 Available Badges</span>
        </div>
        <div className="retro-panel-content">
          <p style={{ marginBottom: '16px' }}>
            Unlock these badges by completing various tasks and achievements!
          </p>
          <div className="badges-grid">
            {mockBadges.filter((b) => !user.badges.find((ub) => ub.id === b.id)).map((badge) => (
              <div key={badge.id} className="badge-card badge-card-locked">
                <div className="badge-icon" style={{ opacity: 0.3 }}>
                  {badge.icon}
                </div>
                <div className="badge-name" style={{ opacity: 0.5 }}>
                  🔒 {badge.name}
                </div>
                <div className="badge-description" style={{ opacity: 0.5 }}>
                  {badge.description}
                </div>
                <div className={`badge-rarity rarity-${badge.rarity}`}>{badge.rarity.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="retro-panel" style={{ marginTop: '20px' }}>
        <div className="retro-panel-title">
          <span>📊 Leaderboard</span>
        </div>
        <div className="retro-panel-content">
          <table className="retro-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Level</th>
                <th>XP</th>
                <th>Websites</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#ffffcc' }}>
                <td>🥇 1</td>
                <td>🦄 Rainbow Unicorn</td>
                <td>15</td>
                <td>4,567</td>
                <td>12</td>
              </tr>
              <tr>
                <td>🥈 2</td>
                <td>🌸 CyberGrl2000</td>
                <td>12</td>
                <td>2,450</td>
                <td>5</td>
              </tr>
              <tr>
                <td>🥉 3</td>
                <td>🛹 Sk8ter Boi</td>
                <td>8</td>
                <td>1,200</td>
                <td>3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>🎮 GamerDude</td>
                <td>7</td>
                <td>980</td>
                <td>4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>🌺 FlowerPower</td>
                <td>6</td>
                <td>750</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <div className="marquee">
          <div className="marquee-content rainbow-text" style={{ fontSize: '20px', fontWeight: 'bold' }}>
            ✨ Keep building to level up and unlock more badges! ✨
          </div>
        </div>
      </div>
    </div>
  );
}
