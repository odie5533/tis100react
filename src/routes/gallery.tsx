import { createFileRoute, Link } from '@tanstack/react-router';
import { monsters } from '../data/monsters';
import { useState } from 'react';
import { useAdoption } from '../hooks/useAdoption';

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
});

function GalleryPage() {
  const [showFilter, setShowFilter] = useState<'all' | 'Buffy' | 'Angel'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'available' | 'pending' | 'adopted'>('all');
  const { addToCart, isInCart, isAdopted } = useAdoption();

  const filteredMonsters = monsters.filter((monster) => {
    const showMatch = showFilter === 'all' || monster.show === showFilter;
    const statusMatch = statusFilter === 'all' || monster.adoptionStatus === statusFilter;
    return showMatch && statusMatch;
  });

  return (
    <>
      <div className="content-box">
        <h2>🎪 Monster Gallery 🎪</h2>
        <p style={{ fontSize: '1.1em', textAlign: 'center' }}>
          Browse our amazing collection of creatures from the Buffyverse!
        </p>
      </div>

      <div className="filter-section">
        <div style={{ marginBottom: '10px' }}>
          <span className="filter-label">📺 Show:</span>
          <select
            className="retro-select"
            value={showFilter}
            onChange={(e) => setShowFilter(e.target.value as 'all' | 'Buffy' | 'Angel')}
          >
            <option value="all">All Shows</option>
            <option value="Buffy">Buffy the Vampire Slayer</option>
            <option value="Angel">Angel</option>
          </select>
        </div>
        <div>
          <span className="filter-label">🏷️ Status:</span>
          <select
            className="retro-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="pending">Pending</option>
            <option value="adopted">Adopted</option>
          </select>
        </div>
      </div>

      <div className="content-box">
        <p style={{ textAlign: 'center', fontSize: '1.1em', color: 'var(--buffy-gold)' }}>
          Showing {filteredMonsters.length} monster{filteredMonsters.length !== 1 ? 's' : ''}
        </p>

        <div className="monster-grid">
          {filteredMonsters.map((monster) => (
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
              <div style={{ textAlign: 'center' }}>
                <span className={`status-badge status-${monster.adoptionStatus}`}>
                  {monster.adoptionStatus.toUpperCase()}
                </span>
              </div>
              <div style={{ textAlign: 'center', marginTop: '15px' }}>
                <Link to="/monster/$monsterId" params={{ monsterId: monster.id }}>
                  <button className="retro-button">View Details</button>
                </Link>
                {monster.adoptionStatus === 'available' && !isAdopted(monster.id) && (
                  <button
                    className="retro-button"
                    onClick={() => addToCart(monster)}
                    disabled={isInCart(monster.id)}
                  >
                    {isInCart(monster.id) ? '✓ In Cart' : '➕ Add to Cart'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
