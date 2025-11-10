import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { webRings, sites, users } from '../data';
import './WebRingDetail.css';

const WebRingDetail = () => {
  const { ringId } = useParams();
  const ring = webRings.find(r => r.id === ringId);

  if (!ring) {
    return (
      <div className="webring-detail-page">
        <div className="retro-card text-center">
          <h1>Web Ring not found!</h1>
          <Link to="/rings" className="retro-button mt-2">
            Back to Web Rings
          </Link>
        </div>
      </div>
    );
  }

  const creator = users.find(u => u.id === ring.creator);
  const memberSites = sites.filter(s => ring.members.includes(s.owner));

  return (
    <div className="webring-detail-page">
      <div className="ring-banner retro-card">
        <div className="ring-banner-content">
          <div className="ring-badge-large">{ring.badge}</div>
          <div className="ring-info">
            <h1 className="ring-title comic-sans">{ring.name}</h1>
            <p className="ring-description">{ring.description}</p>
            <div className="ring-meta">
              <span className="ring-category">{ring.category}</span>
              <span>Created by <Link to={`/user/${creator?.username}`}>{creator?.username}</Link></span>
              <span>👥 {ring.members.length} members</span>
            </div>
          </div>
          <button className="retro-button retro-button-success join-ring-button">
            Join This Ring
          </button>
        </div>
      </div>

      <div className="ring-content">
        <section className="member-sites-section">
          <h2 className="section-title impact">Member Sites</h2>
          <div className="retro-grid">
            {memberSites.map((site, index) => (
              <div key={site.id} className="ring-member-site">
                <div className="member-number">#{index + 1}</div>
                <Link to={`/sites/${site.id}`} className="site-thumbnail">
                  <div className="site-thumbnail-icon">{site.thumbnail}</div>
                  <div className="site-thumbnail-title">{site.name}</div>
                  <div className="site-thumbnail-stats">
                    👁️ {site.visitCount} visits
                  </div>
                  <div className="site-thumbnail-owner">
                    by {users.find(u => u.id === site.owner)?.username}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <aside className="ring-sidebar">
          <div className="retro-card">
            <h3 className="comic-sans">🎯 Ring Navigation</h3>
            <p className="small-text">Use these buttons to surf through ring members:</p>
            <div className="ring-nav-preview retro-panel mt-1">
              <div className="nav-buttons">
                <button className="retro-button">◀ Previous</button>
                <button className="retro-button">Random 🎲</button>
                <button className="retro-button">Next ▶</button>
              </div>
              <p className="small-text mt-1">
                Add this widget to your site to participate!
              </p>
            </div>
          </div>

          <div className="retro-card mt-1">
            <h3 className="comic-sans">💬 Ring Chat</h3>
            <div className="mock-chat">
              <div className="chat-message">
                <strong>{users[0]?.username}:</strong> Love this ring!
              </div>
              <div className="chat-message">
                <strong>{users[1]?.username}:</strong> Check out my new site!
              </div>
              <div className="chat-message">
                <strong>{users[2]?.username}:</strong> Great community! ✨
              </div>
            </div>
            <div className="chat-input-area mt-1">
              <input type="text" className="retro-input" placeholder="Type a message..." disabled />
              <button className="retro-button mt-1" disabled>Send</button>
            </div>
          </div>

          <div className="retro-card mt-1">
            <h3 className="comic-sans">⭐ Ring Stats</h3>
            <div className="ring-stats">
              <div className="stat-row">
                <span>Total Members:</span>
                <strong>{ring.members.length}</strong>
              </div>
              <div className="stat-row">
                <span>Total Sites:</span>
                <strong>{memberSites.length}</strong>
              </div>
              <div className="stat-row">
                <span>Total Views:</span>
                <strong>{memberSites.reduce((sum, s) => sum + s.visitCount, 0)}</strong>
              </div>
              <div className="stat-row">
                <span>Created:</span>
                <strong>{ring.createdDate}</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default WebRingDetail;
