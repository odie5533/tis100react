import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { neighborhoods, sites, users, webRings } from '../data';
import './NeighborhoodDetail.css';

const NeighborhoodDetail = () => {
  const { name } = useParams();
  const neighborhood = neighborhoods.find(n => n.id === name);

  if (!neighborhood) {
    return (
      <div className="neighborhood-detail-page">
        <div className="retro-card text-center">
          <h1>Neighborhood not found!</h1>
          <Link to="/neighborhoods" className="retro-button mt-2">
            Back to Neighborhoods
          </Link>
        </div>
      </div>
    );
  }

  const neighborhoodSites = sites.filter(s => s.neighborhood === neighborhood.id);
  const neighborhoodRings = webRings.filter(ring =>
    ring.members.some(memberId => {
      const memberSites = sites.filter(s => s.owner === memberId);
      return memberSites.some(s => s.neighborhood === neighborhood.id);
    })
  );
  const newArrivals = neighborhoodSites.slice(-6).reverse();

  return (
    <div className="neighborhood-detail-page">
      <div
        className="neighborhood-banner-section"
        style={{ background: neighborhood.color }}
      >
        <div className="banner-content">
          <div className="banner-icon">{neighborhood.banner}</div>
          <h1 className="banner-title">{neighborhood.name}</h1>
          <p className="banner-description">{neighborhood.description}</p>
          <div className="banner-stats">
            <span>👥 {neighborhood.memberCount} members</span>
            <span>🌐 {neighborhoodSites.length} sites</span>
            <span>💍 {neighborhoodRings.length} web rings</span>
          </div>
        </div>
      </div>

      <div className="neighborhood-content">
        <div className="main-content">
          <section>
            <h2 className="section-title impact">All Sites in {neighborhood.name}</h2>
            <div className="retro-grid">
              {neighborhoodSites.map((site) => (
                <Link
                  key={site.id}
                  to={`/sites/${site.id}`}
                  className="site-thumbnail"
                >
                  <div className="site-thumbnail-icon">{site.thumbnail}</div>
                  <div className="site-thumbnail-title">{site.name}</div>
                  <div className="site-thumbnail-stats">
                    👁️ {site.visitCount} visits
                  </div>
                  <div className="site-thumbnail-owner">
                    by {users.find(u => u.id === site.owner)?.username}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="sidebar">
          <div className="retro-card">
            <h3 className="comic-sans">📰 Community Bulletin</h3>
            <div className="bulletin-board">
              <div className="bulletin-post">
                <strong>Welcome!</strong>
                <p>Check out the newest sites in our neighborhood!</p>
              </div>
              <div className="bulletin-post">
                <strong>Tips & Tricks</strong>
                <p>Use animated GIFs to make your site stand out!</p>
              </div>
              <div className="bulletin-post">
                <strong>Events</strong>
                <p>Join our web rings to connect with others!</p>
              </div>
            </div>
          </div>

          <div className="retro-card mt-1">
            <h3 className="comic-sans">💍 Active Web Rings</h3>
            <div className="rings-list">
              {neighborhoodRings.slice(0, 5).map((ring) => (
                <Link
                  key={ring.id}
                  to={`/rings/${ring.id}`}
                  className="ring-item"
                >
                  <span className="ring-badge">{ring.badge}</span>
                  <span className="ring-name">{ring.name}</span>
                  <span className="ring-count">{ring.members.length}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="retro-card mt-1">
            <h3 className="comic-sans">✨ New Arrivals</h3>
            <div className="new-arrivals-grid">
              {newArrivals.map((site) => (
                <Link
                  key={site.id}
                  to={`/sites/${site.id}`}
                  className="mini-thumbnail"
                  title={site.name}
                >
                  <div className="mini-icon">{site.thumbnail}</div>
                  <div className="mini-title">{site.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NeighborhoodDetail;
