import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { sites, activities, badges } from '../data';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useApp();

  if (!user) {
    return (
      <div className="dashboard-page">
        <div className="retro-card text-center">
          <h1>Please log in to view your dashboard</h1>
          <Link to="/" className="retro-button mt-2">Go Home</Link>
        </div>
      </div>
    );
  }

  const userSites = sites.filter(site => site.owner === user.id);
  const userBadges = badges.filter(badge => user.badges.includes(badge.id));
  const xpProgress = (user.xp % 200) / 200 * 100;
  const xpToNextLevel = 200 - (user.xp % 200);

  return (
    <div className="dashboard-page">
      <div className="dashboard-header retro-card">
        <div className="user-profile-section">
          <div className="user-avatar-large">{user.avatar}</div>
          <div className="user-info">
            <h1 className="comic-sans">{user.username}</h1>
            <p className="user-status">{user.status}</p>
            <div className="user-level">
              <span className="level-badge">Level {user.level}</span>
            </div>
          </div>
        </div>

        <div className="xp-section">
          <div className="xp-bar">
            <div className="xp-bar-fill" style={{ width: `${xpProgress}%` }}></div>
            <div className="xp-bar-text">
              {user.xp % 200} / 200 XP
            </div>
          </div>
          <p className="xp-info">{xpToNextLevel} XP to level {user.level + 1}</p>
        </div>

        <div className="quick-stats">
          <div className="quick-stat">
            <div className="quick-stat-value">{userSites.reduce((sum, site) => sum + site.visitCount, 0)}</div>
            <div className="quick-stat-label">Total Views</div>
          </div>
          <div className="quick-stat">
            <div className="quick-stat-value">{userSites.length}</div>
            <div className="quick-stat-label">Sites Created</div>
          </div>
          <div className="quick-stat">
            <div className="quick-stat-value">{user.badges.length}</div>
            <div className="quick-stat-label">Badges Earned</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <section className="my-sites-section">
          <div className="section-header">
            <h2 className="impact">🌐 My Sites</h2>
            <Link to="/builder" className="retro-button retro-button-success">
              + Create New Site
            </Link>
          </div>

          <div className="sites-grid retro-grid">
            {userSites.length === 0 ? (
              <div className="empty-state retro-card">
                <p className="comic-sans">You haven't created any sites yet!</p>
                <Link to="/builder" className="retro-button mt-1">
                  Create Your First Site
                </Link>
              </div>
            ) : (
              userSites.map((site) => (
                <div key={site.id} className="site-card">
                  <Link to={`/sites/${site.id}`} className="site-thumbnail">
                    <div className="site-thumbnail-icon">{site.thumbnail}</div>
                    <div className="site-thumbnail-title">{site.name}</div>
                    <div className="site-thumbnail-stats">
                      👁️ {site.visitCount} visits
                    </div>
                  </Link>
                  <div className="site-actions">
                    <Link to={`/builder/${site.id}`} className="retro-button">
                      ✏️ Edit
                    </Link>
                    <Link to={`/sites/${site.id}`} className="retro-button">
                      👁️ View
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <aside className="dashboard-sidebar">
          <section className="badges-section retro-card">
            <h3 className="comic-sans">🏆 Badges ({user.badges.length})</h3>
            <div className="badges-grid">
              {userBadges.map((badge) => (
                <div
                  key={badge.id}
                  className={`badge ${badge.rarity}`}
                  title={`${badge.name}: ${badge.description}`}
                >
                  {badge.icon}
                </div>
              ))}
            </div>
          </section>

          <section className="activity-feed retro-card mt-1">
            <h3 className="comic-sans">📰 Recent Activity</h3>
            <div className="activity-list">
              {activities.slice(0, 6).map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-message">{activity.message}</div>
                  <div className="activity-time">{activity.timestamp}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="top-friends retro-card mt-1">
            <h3 className="comic-sans">👥 Top Friends</h3>
            <div className="friends-grid">
              {user.topFriends.slice(0, 8).map((friendId) => {
                const friend = require('../data/users').users.find(u => u.id === friendId);
                return friend ? (
                  <Link
                    key={friendId}
                    to={`/user/${friend.username}`}
                    className="friend-slot"
                    title={friend.username}
                  >
                    <div className="friend-avatar">{friend.avatar}</div>
                    <div className="friend-name">{friend.username}</div>
                  </Link>
                ) : null;
              })}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
