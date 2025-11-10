import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { users, sites, badges, profileGuestbook } from '../data';
import { useApp } from '../context/AppContext';
import './UserProfile.css';

const UserProfile = () => {
  const { username } = useParams();
  const { user: currentUser, addPoke, addXP } = useApp();
  const [pokeCount, setPokeCount] = useState(0);
  const [guestbookMessage, setGuestbookMessage] = useState('');
  const [guestbookEntries, setGuestbookEntries] = useState(profileGuestbook[`user${users.findIndex(u => u.username === username) + 1}`] || []);

  const user = users.find(u => u.username === username);

  if (!user) {
    return (
      <div className="user-profile-page">
        <div className="retro-card text-center">
          <h1>User not found!</h1>
          <Link to="/" className="retro-button mt-2">Go Home</Link>
        </div>
      </div>
    );
  }

  const userSites = sites.filter(s => s.owner === user.id);
  const userBadges = badges.filter(b => user.badges.includes(b.id));

  const handlePoke = () => {
    setPokeCount(prev => prev + 1);
    if (currentUser) {
      addPoke(currentUser.id, user.id);
      addXP(5);
    }
  };

  const handleGuestbookSubmit = (e) => {
    e.preventDefault();
    if (!guestbookMessage.trim() || !currentUser) return;

    const newEntry = {
      id: `gb${Date.now()}`,
      username: currentUser.username,
      avatar: currentUser.avatar,
      message: guestbookMessage,
      timestamp: new Date().toLocaleString(),
      asciiArt: null
    };

    setGuestbookEntries([newEntry, ...guestbookEntries]);
    setGuestbookMessage('');
    addXP(10);
  };

  return (
    <div className="user-profile-page">
      <div className="profile-header retro-card">
        <div className="profile-main">
          <div className="profile-avatar-section">
            <div className="profile-avatar">{user.avatar}</div>
            <button className="retro-button retro-button-primary poke-button" onClick={handlePoke}>
              👉 Poke! {pokeCount > 0 && `(${pokeCount})`}
            </button>
          </div>

          <div className="profile-info">
            <h1 className="profile-username comic-sans">{user.username}</h1>
            <div className="profile-level">Level {user.level}</div>
            <p className="profile-status">{user.status}</p>
            <div className="profile-bio">{user.bio}</div>

            <div className="profile-stats mt-1">
              <div className="profile-stat">
                <span className="stat-label">Member Since:</span>
                <span className="stat-value">{user.joinedDate}</span>
              </div>
              <div className="profile-stat">
                <span className="stat-label">Total Sites:</span>
                <span className="stat-value">{userSites.length}</span>
              </div>
              <div className="profile-stat">
                <span className="stat-label">Badges Earned:</span>
                <span className="stat-value">{user.badges.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-badges">
          <h3 className="comic-sans">🏆 Badges</h3>
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
        </div>
      </div>

      <div className="profile-content">
        <section className="user-sites-section">
          <h2 className="section-title impact">{user.username}'s Sites</h2>
          <div className="retro-grid">
            {userSites.map((site) => (
              <Link key={site.id} to={`/sites/${site.id}`} className="site-thumbnail">
                <div className="site-thumbnail-icon">{site.thumbnail}</div>
                <div className="site-thumbnail-title">{site.name}</div>
                <div className="site-thumbnail-stats">
                  👁️ {site.visitCount} visits
                </div>
              </Link>
            ))}
          </div>
        </section>

        <aside className="profile-sidebar">
          <div className="retro-card">
            <h3 className="comic-sans">👥 Top Friends</h3>
            <div className="top-friends-grid">
              {user.topFriends.slice(0, 8).map((friendId) => {
                const friend = users.find(u => u.id === friendId);
                return friend ? (
                  <Link
                    key={friendId}
                    to={`/user/${friend.username}`}
                    className="friend-slot"
                  >
                    <div className="friend-avatar">{friend.avatar}</div>
                    <div className="friend-name">{friend.username}</div>
                  </Link>
                ) : null;
              })}
            </div>
          </div>

          <div className="retro-card mt-1 guestbook-section">
            <h3 className="comic-sans">📖 Guestbook</h3>

            {currentUser && (
              <form onSubmit={handleGuestbookSubmit} className="guestbook-form">
                <textarea
                  className="retro-textarea"
                  rows="3"
                  placeholder="Leave a message..."
                  value={guestbookMessage}
                  onChange={(e) => setGuestbookMessage(e.target.value)}
                />
                <button type="submit" className="retro-button retro-button-success mt-1">
                  Sign Guestbook
                </button>
              </form>
            )}

            <div className="guestbook-entries mt-1">
              {guestbookEntries.map((entry) => (
                <div key={entry.id} className="guestbook-entry">
                  <div className="guestbook-entry-header">
                    <span className="guestbook-entry-avatar">{entry.avatar}</span>
                    <strong>{entry.username}</strong>
                  </div>
                  <div className="guestbook-entry-message">{entry.message}</div>
                  {entry.asciiArt && (
                    <div className="guestbook-entry-ascii">{entry.asciiArt}</div>
                  )}
                  <div className="guestbook-entry-timestamp">{entry.timestamp}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default UserProfile;
