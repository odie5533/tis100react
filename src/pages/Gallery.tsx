import { useState } from 'react';
import { mockWebsites } from '../data/mockData';
import type { Website } from '../types';
import './Gallery.css';

export default function Gallery() {
  const [selectedSite, setSelectedSite] = useState<Website | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured' | 'popular'>('all');

  const filteredSites = mockWebsites.filter((site) => {
    if (filter === 'featured') return site.featured;
    if (filter === 'popular') return site.visits > 1000;
    return true;
  });

  const handleLike = (siteId: string) => {
    console.log('Liked site:', siteId);
  };

  return (
    <div className="gallery-page">
      <div className="retro-panel">
        <div className="retro-panel-title">
          <span>🖼️ Website Gallery</span>
        </div>
        <div className="retro-panel-content">
          <p style={{ marginBottom: '16px' }}>
            Browse amazing websites created by our community! Click on any site to view details.
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              className={`retro-button ${filter === 'all' ? 'primary' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Sites
            </button>
            <button
              className={`retro-button ${filter === 'featured' ? 'primary' : ''}`}
              onClick={() => setFilter('featured')}
            >
              ⭐ Featured
            </button>
            <button
              className={`retro-button ${filter === 'popular' ? 'primary' : ''}`}
              onClick={() => setFilter('popular')}
            >
              🔥 Popular
            </button>
          </div>
        </div>
      </div>

      <div className="gallery-grid">
        {filteredSites.map((site) => (
          <div key={site.id} className="retro-panel gallery-card" onClick={() => setSelectedSite(site)}>
            <div className="retro-panel-title">
              <span>{site.title}</span>
              {site.featured && <span>⭐</span>}
            </div>
            <div className="retro-panel-content">
              <div className="site-preview" style={{ backgroundColor: site.backgroundColor, minHeight: '150px', padding: '12px' }}>
                {site.widgets.slice(0, 2).map((widget) => (
                  <div key={widget.id} style={{ marginBottom: '8px', fontSize: '12px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {widget.type === 'glitter-text' && (
                      <span className={widget.style?.rainbow ? 'rainbow-text' : ''} style={{ fontWeight: 'bold' }}>
                        {widget.content}
                      </span>
                    )}
                    {widget.type === 'text' && <span>{widget.content.substring(0, 50)}...</span>}
                    {widget.type === 'marquee' && <span>📜 {widget.content.substring(0, 30)}...</span>}
                  </div>
                ))}
              </div>
              <div className="site-meta">
                <div className="site-author">
                  <span>{site.author.avatar}</span>
                  <span style={{ fontWeight: 'bold' }}>{site.author.displayName}</span>
                </div>
                <div className="site-stats">
                  <span>👁️ {site.visits}</span>
                  <button
                    className="like-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(site.id);
                    }}
                  >
                    ❤️ {site.likes}
                  </button>
                  <span>💬 {site.comments.length}</span>
                </div>
              </div>
              <div className="site-theme">
                <span className="badge" style={{ fontSize: '10px', padding: '2px 8px' }}>
                  {site.theme}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedSite && (
        <div className="modal-overlay" onClick={() => setSelectedSite(null)}>
          <div className="retro-panel modal-content site-detail" onClick={(e) => e.stopPropagation()}>
            <div className="retro-panel-title">
              <span>{selectedSite.title}</span>
              <button
                onClick={() => setSelectedSite(null)}
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }}
              >
                ❌
              </button>
            </div>
            <div className="retro-panel-content">
              <div className="site-full-preview" style={{ backgroundColor: selectedSite.backgroundColor, padding: '20px', marginBottom: '16px', minHeight: '300px' }}>
                <h1 className="rainbow-text" style={{ textAlign: 'center', marginBottom: '20px' }}>
                  {selectedSite.title}
                </h1>
                {selectedSite.widgets.map((widget) => (
                  <div key={widget.id} style={{ marginBottom: '12px' }}>
                    {widget.type === 'glitter-text' && (
                      <div className={widget.style?.rainbow ? 'rainbow-text' : ''} style={{ fontWeight: 'bold', fontSize: widget.style?.fontSize, textAlign: 'center' }}>
                        {widget.content}
                      </div>
                    )}
                    {widget.type === 'text' && (
                      <div style={{ fontSize: widget.style?.fontSize, color: widget.style?.color }}>
                        {widget.content}
                      </div>
                    )}
                    {widget.type === 'marquee' && (
                      <div className="marquee">
                        <div className="marquee-content" style={{ color: widget.style?.color }}>
                          {widget.content}
                        </div>
                      </div>
                    )}
                    {widget.type === 'construction' && (
                      <div className="under-construction">
                        <span className="blink">🚧</span> {widget.content} <span className="blink">🚧</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: '16px' }}>
                <h3>About this site</h3>
                <p>Created by: {selectedSite.author.displayName} {selectedSite.author.avatar}</p>
                <p>Theme: <span className="badge">{selectedSite.theme}</span></p>
                <p>Created: {selectedSite.createdAt.toLocaleDateString()}</p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <h3>Statistics</h3>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div>👁️ {selectedSite.visits} visits</div>
                  <div>❤️ {selectedSite.likes} likes</div>
                  <div>💬 {selectedSite.comments.length} comments</div>
                </div>
              </div>

              {selectedSite.comments.length > 0 && (
                <div>
                  <h3>Comments</h3>
                  {selectedSite.comments.map((comment) => (
                    <div key={comment.id} className="guestbook-entry">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <strong>
                          {comment.author.avatar} {comment.author.displayName}
                        </strong>
                        <span style={{ fontSize: '12px', color: '#666' }}>
                          {comment.createdAt.toLocaleDateString()}
                        </span>
                      </div>
                      <p>{comment.content}</p>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ marginTop: '16px' }}>
                <button className="retro-button primary" style={{ width: '100%', padding: '12px' }}>
                  💬 Leave a Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
