import { useState } from 'react';
import { mockWebRings } from '../data/mockData';
import type { WebRing } from '../types';
import './WebRings.css';

export default function WebRings() {
  const [selectedRing, setSelectedRing] = useState<WebRing | null>(null);

  return (
    <div className="webrings-page">
      <div className="retro-panel">
        <div className="retro-panel-title">
          <span>💫 Web Rings</span>
        </div>
        <div className="retro-panel-content">
          <h2 style={{ marginBottom: '12px' }}>What are Web Rings?</h2>
          <p style={{ marginBottom: '16px' }}>
            Web rings are communities of websites linked together in a circle! Join a ring to connect with
            other sites that share your interests. Navigate through member sites using the ring navigation
            buttons to discover amazing content!
          </p>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <div className="webring-demo">
              <button className="retro-button" style={{ fontSize: '12px', padding: '6px 12px' }}>
                ⬅️ Previous
              </button>
              <span style={{ margin: '0 12px', fontWeight: 'bold' }}>Web Ring Name</span>
              <button className="retro-button" style={{ fontSize: '12px', padding: '6px 12px' }}>
                Next ➡️
              </button>
            </div>
            <p style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>
              This is what a web ring navigation looks like!
            </p>
          </div>
          <button className="retro-button primary" style={{ marginTop: '16px' }}>
            ➕ Create Your Own Web Ring
          </button>
        </div>
      </div>

      <div className="rings-grid">
        {mockWebRings.map((ring) => (
          <div key={ring.id} className="retro-panel ring-card" onClick={() => setSelectedRing(ring)}>
            <div className="retro-panel-title">
              <span>
                {ring.icon} {ring.name}
              </span>
              <span style={{ fontSize: '14px' }}>{ring.memberCount} members</span>
            </div>
            <div className="retro-panel-content">
              <p style={{ marginBottom: '12px' }}>{ring.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                <div>
                  <span className="badge" style={{ fontSize: '10px', padding: '2px 8px' }}>
                    {ring.theme}
                  </span>
                </div>
                <div style={{ color: '#666' }}>
                  Created by {ring.creator.displayName}
                </div>
              </div>
              <button
                className="retro-button secondary"
                style={{ width: '100%', marginTop: '12px' }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Join Ring
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedRing && (
        <div className="modal-overlay" onClick={() => setSelectedRing(null)}>
          <div className="retro-panel modal-content ring-detail" onClick={(e) => e.stopPropagation()}>
            <div className="retro-panel-title">
              <span>
                {selectedRing.icon} {selectedRing.name}
              </span>
              <button
                onClick={() => setSelectedRing(null)}
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }}
              >
                ❌
              </button>
            </div>
            <div className="retro-panel-content">
              <div style={{ marginBottom: '20px' }}>
                <h3>About this Web Ring</h3>
                <p style={{ marginBottom: '12px' }}>{selectedRing.description}</p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
                  <div>
                    <strong>Theme:</strong> <span className="badge">{selectedRing.theme}</span>
                  </div>
                  <div>
                    <strong>Members:</strong> {selectedRing.memberCount}
                  </div>
                  <div>
                    <strong>Created:</strong> {selectedRing.createdAt.toLocaleDateString()}
                  </div>
                  <div>
                    <strong>Creator:</strong> {selectedRing.creator.displayName} {selectedRing.creator.avatar}
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h3>Web Ring Navigation</h3>
                <div className="webring-nav-large">
                  <button className="retro-button">⬅️ Previous Site</button>
                  <button className="retro-button primary">🏠 Ring Home</button>
                  <button className="retro-button">Random 🎲</button>
                  <button className="retro-button">Next Site ➡️</button>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h3>Member Sites ({selectedRing.members.length} shown)</h3>
                <div className="member-sites">
                  {selectedRing.members.map((site) => (
                    <div key={site.id} className="member-site">
                      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{site.title}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>
                        by {site.author.displayName} {site.author.avatar}
                      </div>
                      <div style={{ fontSize: '12px', marginTop: '4px' }}>
                        👁️ {site.visits} visits
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="retro-button secondary" style={{ width: '100%', padding: '12px' }}>
                🎉 Join This Web Ring
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="retro-panel" style={{ marginTop: '30px' }}>
        <div className="retro-panel-title">
          <span>📜 Web Ring Code</span>
        </div>
        <div className="retro-panel-content">
          <p style={{ marginBottom: '12px' }}>
            Once you join a web ring, copy this code to your website to display the navigation:
          </p>
          <div style={{ background: '#000', color: '#0f0', padding: '12px', fontFamily: 'monospace', fontSize: '12px', overflow: 'auto' }}>
            {`<div class="webring">
  <a href="#prev">← Previous</a>
  <span>Member of Cool Ring</span>
  <a href="#next">Next →</a>
</div>`}
          </div>
        </div>
      </div>
    </div>
  );
}
