import { createFileRoute, Link } from '@tanstack/react-router';
import { useAdoption } from '../hooks/useAdoption';

export const Route = createFileRoute('/cart')({
  component: CartPage,
});

function CartPage() {
  const { cart, removeFromCart, adoptMonster } = useAdoption();

  const handleAdoptAll = () => {
    cart.forEach((monster) => {
      adoptMonster(monster.id);
    });
  };

  return (
    <>
      <div className="content-box">
        <h2>🛒 Your Adoption Cart</h2>
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '4em', margin: '20px 0' }}>🦇</div>
            <h3>Your cart is empty!</h3>
            <p style={{ fontSize: '1.1em', margin: '20px 0' }}>
              Looks like you haven't added any monsters yet. Browse our gallery to find your perfect companion!
            </p>
            <Link to="/gallery">
              <button className="retro-button" style={{ fontSize: '1.2em', padding: '15px 30px' }}>
                Browse Monsters
              </button>
            </Link>
          </div>
        ) : (
          <>
            <p style={{ textAlign: 'center', fontSize: '1.1em', margin: '15px 0' }}>
              You have <strong style={{ color: 'var(--lime-green)' }}>{cart.length}</strong> monster
              {cart.length !== 1 ? 's' : ''} ready for adoption!
            </p>

            <div className="monster-grid">
              {cart.map((monster) => (
                <div key={monster.id} className="monster-card">
                  <div className="monster-emoji">{monster.image}</div>
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
                    <button
                      className="retro-button"
                      onClick={() => removeFromCart(monster.id)}
                      style={{ background: 'linear-gradient(180deg, var(--blood-red) 0%, #660000 100%)' }}
                    >
                      ❌ Remove
                    </button>
                    <button className="retro-button" onClick={() => adoptMonster(monster.id)}>
                      💝 Adopt Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="content-box"
              style={{
                marginTop: '30px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.4) 0%, rgba(255, 215, 0, 0.4) 100%)',
              }}
            >
              <h3>🎉 Ready to Complete Your Adoption? 🎉</h3>
              <p style={{ fontSize: '1.1em', margin: '20px 0' }}>
                By adopting, you agree to provide a safe, loving environment for your new monster companion(s).
                Care instructions will be provided upon adoption.
              </p>
              <button
                className="retro-button"
                style={{ fontSize: '1.3em', padding: '15px 40px' }}
                onClick={handleAdoptAll}
              >
                ✨ ADOPT ALL ({cart.length}) ✨
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
