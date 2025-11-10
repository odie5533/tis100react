import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sites, users } from '../data';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const getRandomSite = () => {
    const randomIndex = Math.floor(Math.random() * sites.length);
    navigate(`/sites/${sites[randomIndex].id}`);
  };

  const featuredSites = sites.slice(0, 6);

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 3 >= featuredSites.length ? 0 : prev + 3));
  };

  const prevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 3 < 0 ? Math.max(0, featuredSites.length - 3) : prev - 3));
  };

  return (
    <div className="landing-page">
      <section className="hero star-background">
        <div className="hero-content">
          <h1 className="hero-title rainbow-text drop-shadow">
            NeoCities2K
          </h1>
          <div className="sparkles">✨ ⭐ ✨ ⭐ ✨</div>
          <p className="hero-tagline comic-sans">
            Your corner of the internet, reimagined
          </p>

          <button
            className="random-site-button retro-button-primary retro-button"
            onClick={getRandomSite}
          >
            <span className="button-icon">🎲</span>
            RANDOM SITE
            <span className="button-icon">🎲</span>
          </button>

          <div className="hero-actions">
            <Link to="/dashboard" className="retro-button retro-button-success">
              🏠 Go to Dashboard
            </Link>
            <Link to="/explore" className="retro-button">
              🔍 Explore Sites
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section retro-panel">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">🌐</div>
            <div className="stat-number visitor-counter">{sites.length}</div>
            <div className="stat-label">Total Sites Created</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">💍</div>
            <div className="stat-number visitor-counter">15</div>
            <div className="stat-label">Active Web Rings</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <div className="stat-number visitor-counter">{users.length}</div>
            <div className="stat-label">Amazing Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon blink">●</div>
            <div className="stat-number visitor-counter">
              {Math.floor(Math.random() * 1000) + 500}
            </div>
            <div className="stat-label">Users Online</div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-title impact drop-shadow">
          ⭐ Featured Sites ⭐
        </h2>

        <div className="carousel-container">
          <button className="carousel-button retro-button" onClick={prevFeatured}>
            ◀
          </button>

          <div className="featured-grid">
            {featuredSites.slice(featuredIndex, featuredIndex + 3).map((site) => (
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

          <button className="carousel-button retro-button" onClick={nextFeatured}>
            ▶
          </button>
        </div>
      </section>

      <section className="welcome-section retro-card">
        <h2 className="comic-sans text-center drop-shadow">
          🌟 Welcome to NeoCities2K! 🌟
        </h2>
        <div className="marquee-text">
          <span>*** Create your own website! *** Join web rings! *** Make new friends! *** Express yourself! ***</span>
        </div>
        <p className="text-center mt-2">
          Build your personal corner of the web just like the good old days!
          Drag and drop components, customize colors, add GIFs, and join communities!
        </p>

        <div className="feature-highlights">
          <div className="feature-item">
            <div className="feature-icon">🎨</div>
            <h3>Express Yourself</h3>
            <p>Use Comic Sans, rainbow text, and all the GIFs!</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💍</div>
            <h3>Join Web Rings</h3>
            <p>Connect with others who share your interests</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏘️</div>
            <h3>Find Your Neighborhood</h3>
            <p>Music, Tech, Art, Gaming, or Blogs - pick your home!</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⭐</div>
            <h3>Level Up</h3>
            <p>Earn XP, unlock badges, and become a legend!</p>
          </div>
        </div>
      </section>

      <div className="under-construction text-center mt-2">
        🚧 SITE UNDER CONSTRUCTION - MORE FEATURES COMING SOON! 🚧
      </div>
    </div>
  );
};

export default LandingPage;
