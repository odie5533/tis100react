import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import { monsters } from '../data/monsters';
import { useState, useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  const availableCount = monsters.filter((m) => m.adoptionStatus === 'available').length;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.8) {
        const id = Date.now();
        setSparkles((prev) => [...prev.slice(-10), { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 500);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          style={{
            position: 'fixed',
            left: sparkle.x,
            top: sparkle.y,
            pointerEvents: 'none',
            fontSize: '20px',
            animation: 'sparkle 0.5s ease-out',
            zIndex: 9999,
          }}
        >
          ✨
        </div>
      ))}

      <div className="content-box">
        <h2>
          <span className="blink">🌟</span> Welcome to Sunnydale's #1 Monster Adoption Site! <span className="blink">🌟</span>
        </h2>
        <p style={{ fontSize: '1.2em', textAlign: 'center', color: 'var(--lime-green)' }}>
          Looking for a companion with a little extra... <i>bite</i>?
        </p>
        <p style={{ textAlign: 'center', color: 'var(--buffy-gold)' }}>
          You've come to the right place! We have <strong>{availableCount}</strong> amazing creatures waiting for their forever homes!
        </p>
      </div>

      <div className="content-box" style={{ textAlign: 'center' }}>
        <h3>🎊 Featured This Week! 🎊</h3>
        <div style={{ margin: '20px 0' }}>
          <div className="monster-card" style={{ display: 'inline-block', maxWidth: '400px' }}>
            <div className="monster-emoji">🧛‍♀️</div>
            <h3 className="monster-name">Harmony Kendall</h3>
            <p className="monster-species">Vampire</p>
            <p style={{ color: 'var(--lime-green)', margin: '15px 0' }}>
              Ditzy, fashion-forward, and surprisingly loyal! Perfect for beginners!
            </p>
            <Link to="/gallery">
              <button className="retro-button">View All Monsters!</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="content-box">
        <h2>📋 Why Adopt a Monster?</h2>
        <ul style={{ fontSize: '1.1em' }}>
          <li>✨ Unique personalities you won't find anywhere else!</li>
          <li>🌙 Many are surprisingly low-maintenance (mostly nocturnal)</li>
          <li>💪 Built-in home security system</li>
          <li>🎭 Endless entertainment and stories for parties</li>
          <li>❤️ Give a misunderstood creature a second chance!</li>
        </ul>
      </div>

      <div className="content-box" style={{ textAlign: 'center' }}>
        <h2>🚀 Getting Started is Easy!</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '20px 0' }}>
          <div style={{ flex: '1', minWidth: '200px', margin: '10px' }}>
            <div style={{ fontSize: '3em' }}>1️⃣</div>
            <h3>Browse</h3>
            <p>Check out our amazing selection of monsters!</p>
          </div>
          <div style={{ flex: '1', minWidth: '200px', margin: '10px' }}>
            <div style={{ fontSize: '3em' }}>2️⃣</div>
            <h3>Choose</h3>
            <p>Add your favorites to your adoption cart!</p>
          </div>
          <div style={{ flex: '1', minWidth: '200px', margin: '10px' }}>
            <div style={{ fontSize: '3em' }}>3️⃣</div>
            <h3>Adopt</h3>
            <p>Complete the adoption and welcome your new friend!</p>
          </div>
        </div>
        <Link to="/gallery">
          <button className="retro-button" style={{ fontSize: '1.3em', padding: '15px 30px' }}>
            🎉 START BROWSING NOW! 🎉
          </button>
        </Link>
      </div>

      <div className="under-construction">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Ctext x='25' y='35' font-size='40' text-anchor='middle'%3E🚧%3C/text%3E%3C/svg%3E"
          alt="Under Construction"
          style={{ display: 'inline-block', marginRight: '10px' }}
        />
        This site is under construction! New monsters added weekly!
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Ctext x='25' y='35' font-size='40' text-anchor='middle'%3E🚧%3C/text%3E%3C/svg%3E"
          alt="Under Construction"
          style={{ display: 'inline-block', marginLeft: '10px' }}
        />
      </div>

      <div className="content-box" style={{ background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.3) 0%, rgba(255, 215, 0, 0.3) 100%)' }}>
        <h2>⚠️ Important Notice ⚠️</h2>
        <p style={{ fontSize: '1.1em', color: 'var(--warning-yellow)' }}>
          All monsters have been vetted by the Scooby Gang and are certified non-apocalyptic.
          Individual results may vary. Please read care instructions carefully.
          Not responsible for any dimensional rifts or end-of-world scenarios.
        </p>
      </div>
    </>
  );
}
