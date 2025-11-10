import { createFileRoute, Link } from '@tanstack/react-router';
import { getMonsterById } from '../data/monsters';
import { useAdoption } from '../hooks/useAdoption';

export const Route = createFileRoute('/monster/$monsterId')({
  component: MonsterDetailPage,
});

function MonsterDetailPage() {
  const { monsterId } = Route.useParams();
  const { addToCart, isInCart, isAdopted } = useAdoption();
  const monster = getMonsterById(monsterId);

  if (!monster) {
    return (
      <div className="content-box">
        <h2>👻 Monster Not Found!</h2>
        <p>Oops! This monster seems to have escaped through a dimensional portal...</p>
        <Link to="/gallery">
          <button className="retro-button">Back to Gallery</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="content-box">
        <Link to="/gallery">
          <button className="retro-button">← Back to Gallery</button>
        </Link>
      </div>

      <div className="content-box" style={{ background: 'linear-gradient(135deg, rgba(153, 51, 255, 0.4) 0%, rgba(0, 153, 255, 0.4) 100%)' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="monster-emoji" style={{ fontSize: '6em' }}>
            {monster.image}
          </div>
          <h2 style={{ fontSize: '2.5em', margin: '20px 0' }}>{monster.name}</h2>
          <p className="monster-species" style={{ fontSize: '1.5em' }}>
            {monster.species}
          </p>
          <div style={{ margin: '15px 0' }}>
            <span className={`monster-show-badge ${monster.show.toLowerCase()}`} style={{ fontSize: '1.1em' }}>
              From: {monster.show}
            </span>
          </div>
          <div className="danger-level" style={{ fontSize: '1.3em', margin: '15px 0' }}>
            Danger Level:{' '}
            <span className="danger-stars">
              {'★'.repeat(monster.dangerLevel)}
              {'☆'.repeat(5 - monster.dangerLevel)}
            </span>
          </div>
          <div style={{ margin: '15px 0' }}>
            <span className={`status-badge status-${monster.adoptionStatus}`} style={{ fontSize: '1.1em' }}>
              {monster.adoptionStatus.toUpperCase()}
            </span>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3>📝 Biography</h3>
          <p style={{ fontSize: '1.1em', lineHeight: '1.8' }}>{monster.bio}</p>
        </div>

        <div style={{ marginTop: '25px' }}>
          <h3>🎭 Personality</h3>
          <p style={{ fontSize: '1.1em' }}>{monster.personality}</p>
        </div>

        <div style={{ marginTop: '25px' }}>
          <h3>✨ Special Abilities</h3>
          <ul>
            {monster.specialAbilities.map((ability, index) => (
              <li key={index} style={{ fontSize: '1.1em' }}>
                {ability}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: '25px' }}>
          <h3>🍽️ Dietary Needs</h3>
          <p style={{ fontSize: '1.1em' }}>{monster.dietaryNeeds}</p>
        </div>

        <div style={{ marginTop: '25px' }}>
          <h3>📊 Stats</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '15px' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '15px', borderRadius: '10px', border: '2px solid var(--buffy-gold)' }}>
              <p style={{ color: 'var(--buffy-gold)', fontWeight: 'bold' }}>Age</p>
              <p style={{ fontSize: '1.2em' }}>{monster.age}</p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '15px', borderRadius: '10px', border: '2px solid var(--buffy-gold)' }}>
              <p style={{ color: 'var(--buffy-gold)', fontWeight: 'bold' }}>Last Seen</p>
              <p style={{ fontSize: '1.2em' }}>{monster.lastSeen}</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px', padding: '20px', background: 'rgba(0,0,0,0.3)', borderRadius: '10px' }}>
          {monster.adoptionStatus === 'available' && !isAdopted(monster.id) ? (
            <>
              <h3 style={{ marginBottom: '15px' }}>💝 Ready to Adopt?</h3>
              <button
                className="retro-button"
                style={{ fontSize: '1.3em', padding: '15px 30px' }}
                onClick={() => addToCart(monster)}
                disabled={isInCart(monster.id)}
              >
                {isInCart(monster.id) ? '✓ Already in Cart!' : '➕ Add to Adoption Cart'}
              </button>
              {isInCart(monster.id) && (
                <div style={{ marginTop: '15px' }}>
                  <Link to="/cart">
                    <button className="retro-button">Go to Cart →</button>
                  </Link>
                </div>
              )}
            </>
          ) : monster.adoptionStatus === 'pending' ? (
            <div>
              <h3>⏳ Adoption Pending</h3>
              <p>This monster is currently being processed for adoption.</p>
            </div>
          ) : isAdopted(monster.id) ? (
            <div>
              <h3>💚 You Adopted This Monster!</h3>
              <Link to="/collection">
                <button className="retro-button">View Your Collection</button>
              </Link>
            </div>
          ) : (
            <div>
              <h3>❤️ Already Adopted</h3>
              <p>This monster has found their forever home!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
