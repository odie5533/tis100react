import './Navigation.css';

type Page = 'home' | 'builder' | 'gallery' | 'webrings' | 'profile';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="retro-nav">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="sparkle">✨</span>
          <span className="rainbow-text" style={{ fontWeight: 'bold', fontSize: '24px' }}>
            GeoCitiesRevived
          </span>
          <span className="sparkle">✨</span>
        </div>
        <div className="nav-links">
          <button
            className={`retro-button ${currentPage === 'home' ? 'primary' : ''}`}
            onClick={() => onNavigate('home')}
          >
            🏠 Home
          </button>
          <button
            className={`retro-button ${currentPage === 'builder' ? 'primary' : ''}`}
            onClick={() => onNavigate('builder')}
          >
            🔨 Builder
          </button>
          <button
            className={`retro-button ${currentPage === 'gallery' ? 'primary' : ''}`}
            onClick={() => onNavigate('gallery')}
          >
            🖼️ Gallery
          </button>
          <button
            className={`retro-button ${currentPage === 'webrings' ? 'primary' : ''}`}
            onClick={() => onNavigate('webrings')}
          >
            💫 WebRings
          </button>
          <button
            className={`retro-button ${currentPage === 'profile' ? 'primary' : ''}`}
            onClick={() => onNavigate('profile')}
          >
            👤 Profile
          </button>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-content">
          🌟 Welcome to the retro web! 🌟 Create your own website! 🌟 Join web rings! 🌟 Earn badges! 🌟
        </div>
      </div>
    </nav>
  );
}
