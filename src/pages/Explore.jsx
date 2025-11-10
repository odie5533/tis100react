import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sites, users } from '../data';
import './Explore.css';

const Explore = () => {
  const navigate = useNavigate();
  const [surfMode, setSurfMode] = useState(false);
  const [currentSiteIndex, setCurrentSiteIndex] = useState(0);

  useEffect(() => {
    if (surfMode) {
      const interval = setInterval(() => {
        getRandomSite();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [surfMode]);

  const getRandomSite = () => {
    const randomIndex = Math.floor(Math.random() * sites.length);
    setCurrentSiteIndex(randomIndex);
  };

  const goToRandomSite = () => {
    const randomIndex = Math.floor(Math.random() * sites.length);
    navigate(`/sites/${sites[randomIndex].id}`);
  };

  const trendingSites = sites.sort((a, b) => b.visitCount - a.visitCount).slice(0, 8);
  const newSites = sites.slice(-8).reverse();
  const siteOfTheDay = sites[Math.floor(Math.random() * Math.min(10, sites.length))];

  return (
    <div className="explore-page">
      <h1 className="page-title impact drop-shadow text-center">
        🔍 Discover Amazing Sites 🔍
      </h1>

      <div className="explore-hero retro-card">
        <button
          className="random-site-mega-button retro-button-primary retro-button"
          onClick={goToRandomSite}
        >
          <span className="mega-icon">🎲</span>
          <div>
            <div className="mega-text">RANDOM SITE</div>
            <div className="mega-subtext">Click to explore!</div>
          </div>
          <span className="mega-icon">🎲</span>
        </button>

        <div className="surf-mode-toggle">
          <label className="comic-sans">
            <input
              type="checkbox"
              checked={surfMode}
              onChange={(e) => setSurfMode(e.target.checked)}
            />
            {' '}🏄 Surf Mode (Auto-advance every 5 seconds)
          </label>
          {surfMode && (
            <div className="surf-mode-preview retro-panel mt-1">
              <h3>Currently Surfing:</h3>
              <Link
                to={`/sites/${sites[currentSiteIndex]?.id}`}
                className="site-thumbnail"
              >
                <div className="site-thumbnail-icon">{sites[currentSiteIndex]?.thumbnail}</div>
                <div className="site-thumbnail-title">{sites[currentSiteIndex]?.name}</div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <section className="site-of-day retro-card mt-2">
        <h2 className="section-title comic-sans">⭐ Site of the Day ⭐</h2>
        <Link to={`/sites/${siteOfTheDay.id}`} className="featured-site">
          <div className="featured-site-icon">{siteOfTheDay.thumbnail}</div>
          <div className="featured-site-info">
            <h3>{siteOfTheDay.name}</h3>
            <p>by {users.find(u => u.id === siteOfTheDay.owner)?.username}</p>
            <div className="featured-site-stats">
              👁️ {siteOfTheDay.visitCount} visits •
              🏘️ {siteOfTheDay.neighborhood.replace('-', ' ')}
            </div>
          </div>
        </Link>
      </section>

      <section className="trending-section mt-2">
        <h2 className="section-title impact">🔥 Trending Sites 🔥</h2>
        <div className="retro-grid">
          {trendingSites.map((site) => (
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

      <section className="new-sites-section mt-2">
        <h2 className="section-title impact">✨ Fresh Sites ✨</h2>
        <div className="marquee-text mb-1">
          <span>New sites added every day! Check back often!</span>
        </div>
        <div className="retro-grid">
          {newSites.map((site) => (
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
  );
};

export default Explore;
