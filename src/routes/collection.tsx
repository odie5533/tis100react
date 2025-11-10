import { createFileRoute, Link } from '@tanstack/react-router';
import { useAdoption } from '../hooks/useAdoption';

export const Route = createFileRoute('/collection')({
  component: CollectionPage,
});

function CollectionPage() {
  const { adopted } = useAdoption();

  return (
    <>
      <div className="content-box">
        <h2>💝 My Monster Collection</h2>
        {adopted.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '4em', margin: '20px 0' }}>👻</div>
            <h3>You haven't adopted any monsters yet!</h3>
            <p style={{ fontSize: '1.1em', margin: '20px 0' }}>
              Your collection is waiting to be filled with amazing creatures! Start browsing to find your perfect companions.
            </p>
            <Link to="/gallery">
              <button className="retro-button" style={{ fontSize: '1.2em', padding: '15px 30px' }}>
                Browse Monsters
              </button>
            </Link>
          </div>
        ) : (
          <>
            <p style={{ textAlign: 'center', fontSize: '1.2em', margin: '20px 0' }}>
              <span className="blink">★</span> Congratulations! You've adopted{' '}
              <strong style={{ color: 'var(--lime-green)', fontSize: '1.3em' }}>{adopted.length}</strong> monster
              {adopted.length !== 1 ? 's' : ''}! <span className="blink">★</span>
            </p>

            <div
              className="content-box"
              style={{ background: 'linear-gradient(135deg, rgba(0, 255, 0, 0.2) 0%, rgba(255, 215, 0, 0.2) 100%)' }}
            >
              <h3>🎊 Your Adopted Family 🎊</h3>
              <p style={{ textAlign: 'center' }}>
                These wonderful creatures are now part of your family! Remember to check their care instructions regularly.
              </p>
            </div>

            <div className="monster-grid">
              {adopted.map((monster) => (
                <div
                  key={monster.id}
                  className="monster-card"
                  style={{ border: '4px solid var(--lime-green)', boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)' }}
                >
                  <div className="monster-emoji">{monster.image}</div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'var(--lime-green)',
                      color: '#000',
                      padding: '5px 10px',
                      borderRadius: '15px',
                      fontWeight: 'bold',
                      fontSize: '0.9em',
                    }}
                  >
                    ✓ ADOPTED
                  </div>
                  <h3 className="monster-name">{monster.name}</h3>
                  <p className="monster-species">{monster.species}</p>
                  <div style={{ textAlign: 'center' }}>
                    <span className={`monster-show-badge ${monster.show.toLowerCase()}`}>
                      {monster.show}
                    </span>
                  </div>
                  <div className="danger-level">
                    Danger Level:{' '}
                    <span className="danger-stars">
                      {'★'.repeat(monster.dangerLevel)}
                      {'☆'.repeat(5 - monster.dangerLevel)}
                    </span>
                  </div>
                  <p style={{ margin: '10px 0', textAlign: 'center', fontSize: '0.95em' }}>
                    {monster.personality}
                  </p>
                  <div style={{ textAlign: 'center', marginTop: '15px' }}>
                    <Link to="/monster/$monsterId" params={{ monsterId: monster.id }}>
                      <button className="retro-button">View Details</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="content-box" style={{ textAlign: 'center', marginTop: '30px' }}>
              <h3>🌟 Want More Monsters?</h3>
              <p style={{ fontSize: '1.1em', margin: '15px 0' }}>
                There are still more amazing creatures waiting for homes!
              </p>
              <Link to="/gallery">
                <button className="retro-button" style={{ fontSize: '1.2em', padding: '12px 30px' }}>
                  Adopt More Monsters
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
