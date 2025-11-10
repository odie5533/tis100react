import './Home.css';
import { mockWebsites, mockWebRings } from '../data/mockData';

export default function Home() {
  const featuredSites = mockWebsites.filter((site) => site.featured);

  return (
    <div className="home-page">
      <div className="retro-panel hero-panel">
        <div className="retro-panel-title">
          <span>Welcome.exe</span>
          <span>❌</span>
        </div>
        <div className="retro-panel-content">
          <h1 className="rainbow-text" style={{ fontSize: '48px', textAlign: 'center', margin: '20px 0' }}>
            Welcome to GeoCitiesRevived!
          </h1>
          <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '20px' }}>
            Create your own retro website with drag-and-drop widgets! Add marquees, visitor counters,
            glitter text, and more! Join web rings and earn badges as you build your digital empire!
          </p>
          <div style={{ textAlign: 'center', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="retro-button primary" style={{ fontSize: '16px', padding: '12px 24px' }}>
              🚀 Start Building Now!
            </button>
            <button className="retro-button secondary" style={{ fontSize: '16px', padding: '12px 24px' }}>
              🎨 Browse Gallery
            </button>
          </div>
        </div>
      </div>

      <div className="under-construction" style={{ margin: '20px 0' }}>
        <span className="blink">🚧</span> UNDER CONSTRUCTION <span className="blink">🚧</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '30px' }}>
        <div className="retro-panel">
          <div className="retro-panel-title">
            <span>✨ Featured Sites</span>
          </div>
          <div className="retro-panel-content">
            {featuredSites.map((site) => (
              <div key={site.id} style={{ marginBottom: '16px', padding: '12px', background: '#f0f0f0', border: '2px solid #666' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#0000ff' }}>{site.title}</h3>
                <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>
                  by {site.author.displayName} {site.author.avatar}
                </p>
                <div style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
                  <span>👁️ {site.visits}</span>
                  <span>❤️ {site.likes}</span>
                  <span>💬 {site.comments.length}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="retro-panel">
          <div className="retro-panel-title">
            <span>💫 Popular Web Rings</span>
          </div>
          <div className="retro-panel-content">
            {mockWebRings.slice(0, 3).map((ring) => (
              <div key={ring.id} style={{ marginBottom: '16px', padding: '12px', background: '#ffffcc', border: '2px dashed #ff00ff' }}>
                <h3 style={{ margin: '0 0 8px 0' }}>{ring.icon} {ring.name}</h3>
                <p style={{ fontSize: '14px', margin: '0 0 8px 0' }}>{ring.description}</p>
                <p style={{ fontSize: '12px', color: '#666' }}>
                  {ring.memberCount} members
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="retro-panel">
          <div className="retro-panel-title">
            <span>🎮 Gamification</span>
          </div>
          <div className="retro-panel-content">
            <h3>Earn Rewards!</h3>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <li>🏆 Complete achievements</li>
              <li>⭐ Earn XP and level up</li>
              <li>🎖️ Unlock rare badges</li>
              <li>👑 Compete on leaderboards</li>
              <li>💎 Get featured</li>
            </ul>
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <div className="badge rare" style={{ margin: '8px auto' }}>
                <span>🎉</span>
                <span>First Steps</span>
              </div>
              <div className="badge epic" style={{ margin: '8px auto' }}>
                <span>✨</span>
                <span>Web Master</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="retro-panel" style={{ marginTop: '30px' }}>
        <div className="retro-panel-title">
          <span>📊 Statistics</span>
        </div>
        <div className="retro-panel-content">
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="visitor-counter">12,543</div>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>Total Sites</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="visitor-counter">8,234</div>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>Active Builders</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="visitor-counter">156</div>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>Web Rings</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="visitor-counter">999,999</div>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>Page Views</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <img
          src="https://web.archive.org/web/19990117011127im_/http://www.geocities.com/heartland/ranch/2991/bestview.gif"
          alt="Best viewed with eyes"
          style={{ imageRendering: 'pixelated', maxWidth: '200px' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="hit-counter-container" style={{ textAlign: 'center', margin: '20px 0' }}>
        <p style={{ marginBottom: '8px' }}>You are visitor number:</p>
        <div className="hit-counter">
          <div className="hit-counter-digit">0</div>
          <div className="hit-counter-digit">0</div>
          <div className="hit-counter-digit">1</div>
          <div className="hit-counter-digit">3</div>
          <div className="hit-counter-digit">3</div>
          <div className="hit-counter-digit">7</div>
        </div>
      </div>
    </div>
  );
}
