import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { sites, users, webRings, guestbookEntries } from '../data';
import { useApp } from '../context/AppContext';
import './SiteView.css';

const SiteView = () => {
  const { siteId } = useParams();
  const navigate = useNavigate();
  const { incrementSiteVisit, addPoke, addXP } = useApp();
  const [reactions, setReactions] = useState({ cool: 0, nostalgic: 0, creative: 0 });
  const [showBrowser, setShowBrowser] = useState(true);

  const site = sites.find(s => s.id === siteId);
  const owner = site ? users.find(u => u.id === site.owner) : null;
  const siteRings = site ? webRings.filter(r => site.webRings.includes(r.id)) : [];
  const guestbook = site ? guestbookEntries[site.id] || [] : [];

  useEffect(() => {
    if (site) {
      incrementSiteVisit(site.id);
    }
  }, [site, siteId]);

  if (!site) {
    return (
      <div className="site-view-page">
        <div className="retro-card text-center">
          <h1>Site not found!</h1>
          <Link to="/explore" className="retro-button mt-2">Explore Sites</Link>
        </div>
      </div>
    );
  }

  const handleReaction = (type) => {
    setReactions(prev => ({ ...prev, [type]: prev[type] + 1 }));
    addXP(5);
  };

  const getRandomSiteFromRing = (ringId) => {
    const ring = webRings.find(r => r.id === ringId);
    if (!ring) return;

    const ringSites = sites.filter(s => ring.members.includes(s.owner));
    const randomSite = ringSites[Math.floor(Math.random() * ringSites.length)];
    if (randomSite) {
      navigate(`/sites/${randomSite.id}`);
    }
  };

  return (
    <div className="site-view-page">
      <div className="site-toolbar retro-panel">
        <div className="toolbar-left">
          <Link to="/explore" className="retro-button">◀ Back to Explore</Link>
          <button
            className="retro-button"
            onClick={() => setShowBrowser(!showBrowser)}
          >
            {showBrowser ? '📱 Full Screen' : '💻 Browser Mode'}
          </button>
        </div>

        <div className="toolbar-center">
          <div className="visitor-counter">{site.visitCount}</div>
          <span className="counter-label">visitors</span>
        </div>

        <div className="toolbar-right">
          <button
            className="retro-button retro-button-primary"
            onClick={() => owner && addPoke(null, owner.id)}
          >
            👉 Poke Creator
          </button>
          <Link to={`/user/${owner?.username}`} className="retro-button">
            View Profile
          </Link>
        </div>
      </div>

      <div className={`site-container ${showBrowser ? 'browser-mode' : ''}`}>
        {showBrowser && (
          <div className="retro-browser-frame">
            <div className="browser-header">
              <div className="browser-buttons">
                <span className="browser-button close">×</span>
                <span className="browser-button minimize">−</span>
                <span className="browser-button maximize">□</span>
              </div>
              <div className="browser-title">
                {site.name} - Netscape Navigator
              </div>
            </div>
            <div className="browser-address-bar">
              <span className="address-label">Address:</span>
              <div className="address-input">
                http://neocities2k.com/sites/{site.url}
              </div>
              <button className="retro-button">Go</button>
            </div>
          </div>
        )}

        <div
          className="site-content"
          style={{
            backgroundColor: site.content.backgroundColor || site.theme.backgroundColor,
            color: site.content.textColor || site.theme.textColor,
            fontFamily: site.content.font || site.theme.font,
          }}
        >
          <div className="site-inner">
            {site.content.blocks?.map((block, index) => {
              switch (block.type) {
                case 'marquee':
                  return (
                    <div key={index} className="marquee-text">
                      <span>{block.text}</span>
                    </div>
                  );
                case 'heading':
                  return (
                    <h1 key={index} className="site-heading drop-shadow">
                      {block.text}
                    </h1>
                  );
                case 'text':
                  return <p key={index} className="site-text">{block.content}</p>;
                case 'counter':
                  return (
                    <div key={index} className="text-center mt-2">
                      <div className="visitor-counter">{block.count}</div>
                      <div>Visitors</div>
                    </div>
                  );
                case 'guestbook':
                  return (
                    <div key={index} className="mt-2">
                      <h3>Guestbook ({block.entries} entries)</h3>
                      <Link to="#" className="retro-button">Sign My Guestbook</Link>
                    </div>
                  );
                default:
                  return null;
              }
            })}

            {!site.content.blocks && (
              <>
                <h1 className="site-heading comic-sans drop-shadow text-center">
                  {site.content.title || site.name}
                </h1>
                <div className="marquee-text mt-2">
                  <span>*** WELCOME TO MY SITE! *** UNDER CONSTRUCTION! ***</span>
                </div>
                <div className="text-center mt-2">
                  <div className="visitor-counter">{site.visitCount}</div>
                  <p className="mt-1">You are visitor #{site.visitCount}!</p>
                </div>
                <p className="text-center mt-2">
                  Created by {owner?.username} | Last updated: {site.updated}
                </p>
              </>
            )}

            {siteRings.length > 0 && (
              <div className="webring-widgets mt-2">
                <h3 className="text-center">This site is part of:</h3>
                {siteRings.map(ring => (
                  <div key={ring.id} className="webring-widget retro-panel mt-1">
                    <div className="widget-header">
                      <span className="ring-badge">{ring.badge}</span>
                      <strong>{ring.name}</strong>
                    </div>
                    <div className="widget-nav">
                      <button className="retro-button" onClick={() => getRandomSiteFromRing(ring.id)}>
                        ◀ Previous
                      </button>
                      <button className="retro-button" onClick={() => getRandomSiteFromRing(ring.id)}>
                        Random
                      </button>
                      <button className="retro-button" onClick={() => getRandomSiteFromRing(ring.id)}>
                        Next ▶
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="site-actions retro-panel mt-2">
        <div className="reactions">
          <strong>React:</strong>
          <button
            className="reaction-button retro-button"
            onClick={() => handleReaction('cool')}
          >
            😎 Cool! ({reactions.cool})
          </button>
          <button
            className="reaction-button retro-button"
            onClick={() => handleReaction('nostalgic')}
          >
            🌟 Nostalgic! ({reactions.nostalgic})
          </button>
          <button
            className="reaction-button retro-button"
            onClick={() => handleReaction('creative')}
          >
            🎨 Creative! ({reactions.creative})
          </button>
        </div>

        <div className="share-section">
          <strong>Share:</strong>
          <button className="retro-button">🔗 Copy Link</button>
        </div>
      </div>

      {guestbook.length > 0 && (
        <div className="site-guestbook retro-card mt-2">
          <h2 className="comic-sans">📖 Guestbook Entries</h2>
          {guestbook.map(entry => (
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
      )}
    </div>
  );
};

export default SiteView;
