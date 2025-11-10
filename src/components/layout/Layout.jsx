import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import './Layout.css';

const Layout = () => {
  const { user, isLoggedIn, chaosMode, toggleChaosMode, notifications, dismissNotification } = useApp();

  useEffect(() => {
    // ASCII art in console
    console.log(`
 _   _            _____ _ _   _           ___  _  __
| \\ | |          / ____(_) | (_)         |__ \\| |/ /
|  \\| | ___  ___| |     _| |_ _  ___  ___   ) | ' /
| . \` |/ _ \\/ _ \\ |    | | __| |/ _ \\/ __| / /|  <
| |\\  |  __/  __/ |____| | |_| |  __/\\__ \\/ /_| . \\
|_| \\_|\\___|\\___|\_____|_|\\__|_|\\___||___/____|_|\\_\\

    Welcome to NeoCities2K! 🌟
    Your corner of the internet, reimagined.
    `);
  }, []);

  return (
    <div className={`layout ${chaosMode ? 'chaos-mode' : ''}`}>
      <header className="retro-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text">NeoCities2K</span>
            <span className="blink">✨</span>
          </Link>

          <nav className="main-nav">
            <Link to="/explore" className="nav-link">🔍 Explore</Link>
            <Link to="/neighborhoods" className="nav-link">🏘️ Neighborhoods</Link>
            <Link to="/rings" className="nav-link">💍 Web Rings</Link>
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="nav-link">📊 Dashboard</Link>
                <Link to={`/user/${user?.username}`} className="nav-link">
                  {user?.avatar} {user?.username}
                </Link>
              </>
            ) : (
              <button className="nav-link retro-button">Login</button>
            )}
          </nav>

          <button
            className="chaos-toggle retro-button"
            onClick={toggleChaosMode}
            title={chaosMode ? "Disable Chaos Mode" : "Enable Chaos Mode"}
          >
            {chaosMode ? '😵 Chill' : '🌀 Chaos'}
          </button>
        </div>

        {chaosMode && (
          <div className="marquee">
            <span>*** CHAOS MODE ACTIVATED *** EMBRACE THE MADNESS *** CHAOS MODE ACTIVATED ***</span>
          </div>
        )}
      </header>

      {notifications.length > 0 && (
        <div className="notifications">
          {notifications.map((notif, index) => (
            <div key={index} className={`notification notification-${notif.type}`}>
              <span>{notif.message}</span>
              <button onClick={() => dismissNotification(index)}>×</button>
            </div>
          ))}
        </div>
      )}

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="retro-footer">
        <div className="footer-content">
          <p>
            <span className="blink">●</span>
            {Math.floor(Math.random() * 10000)} users online
            <span className="blink">●</span>
          </p>
          <p>Made with 💖 in the spirit of the early 2000s web</p>
          <p className="small">
            Best viewed in 800x600 resolution 😉
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
