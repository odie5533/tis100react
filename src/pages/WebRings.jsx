import React from 'react';
import { Link } from 'react-router-dom';
import { webRings, sites, users } from '../data';
import './WebRings.css';

const WebRings = () => {
  const categories = [...new Set(webRings.map(r => r.category))];

  return (
    <div className="webrings-page">
      <h1 className="page-title impact drop-shadow text-center">
        💍 Web Rings 💍
      </h1>

      <div className="retro-card text-center mb-2">
        <p className="comic-sans">
          Join a web ring to connect your site with others who share your interests!
          Navigate through member sites and build your community!
        </p>
      </div>

      <div className="categories-filter retro-panel mb-2">
        <strong>Categories:</strong>
        {categories.map(cat => (
          <span key={cat} className="category-tag">
            {cat}
          </span>
        ))}
      </div>

      <div className="webrings-grid">
        {webRings.map((ring) => {
          const ringCreator = users.find(u => u.id === ring.creator);
          const memberSites = sites.filter(s => ring.members.includes(s.owner)).slice(0, 3);

          return (
            <Link
              key={ring.id}
              to={`/rings/${ring.id}`}
              className="webring-card retro-card"
            >
              <div className="webring-header">
                <div className="webring-badge">{ring.badge}</div>
                <h2 className="webring-name comic-sans">{ring.name}</h2>
                <div className="webring-category">{ring.category}</div>
              </div>

              <p className="webring-description">{ring.description}</p>

              <div className="webring-stats">
                <span>👥 {ring.members.length} members</span>
                <span>Created by {ringCreator?.username}</span>
              </div>

              <div className="webring-preview">
                <h4>Member Sites:</h4>
                <div className="preview-sites">
                  {memberSites.map((site) => (
                    <div key={site.id} className="preview-site" title={site.name}>
                      {site.thumbnail}
                    </div>
                  ))}
                </div>
              </div>

              <div className="webring-footer">
                <span className="join-button retro-button-success">Join Ring</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WebRings;
