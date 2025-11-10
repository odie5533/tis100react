import React from 'react';
import { Link } from 'react-router-dom';
import { neighborhoods, sites } from '../data';
import './Neighborhoods.css';

const Neighborhoods = () => {
  return (
    <div className="neighborhoods-page">
      <h1 className="page-title impact drop-shadow text-center">
        🏘️ Find Your Neighborhood 🏘️
      </h1>

      <div className="retro-card text-center mb-2">
        <p className="comic-sans">
          Join a neighborhood to connect with like-minded creators!
          Each neighborhood has its own vibe and community.
        </p>
      </div>

      <div className="neighborhoods-grid">
        {neighborhoods.map((neighborhood) => {
          const neighborhoodSites = sites.filter(s => s.neighborhood === neighborhood.id).slice(0, 4);

          return (
            <Link
              key={neighborhood.id}
              to={`/neighborhoods/${neighborhood.id}`}
              className="neighborhood-card retro-card"
              style={{ borderColor: neighborhood.color }}
            >
              <div className="neighborhood-header" style={{ background: neighborhood.color }}>
                <div className="neighborhood-banner">{neighborhood.banner}</div>
                <h2 className="neighborhood-name">{neighborhood.name}</h2>
              </div>

              <div className="neighborhood-body">
                <p className="neighborhood-description">{neighborhood.description}</p>

                <div className="neighborhood-stats">
                  <span>👥 {neighborhood.memberCount} members</span>
                </div>

                <div className="neighborhood-preview">
                  <h4>Recent Sites:</h4>
                  <div className="preview-sites">
                    {neighborhoodSites.map((site) => (
                      <div key={site.id} className="preview-site" title={site.name}>
                        {site.thumbnail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="neighborhood-footer">
                <span className="view-all-link">View All Sites →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Neighborhoods;
