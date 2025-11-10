import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { useAdoption } from '../hooks/useAdoption';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { cart } = useAdoption();

  return (
    <div>
      <header className="site-header">
        <h1 className="site-title">Buffy's Monster Adoption Center</h1>
        <p className="site-subtitle">~*~ Give a demon a forever home! ~*~</p>
      </header>

      <div className="marquee">
        <div className="marquee-content">
          ⚡ NEW ARRIVALS DAILY ⚡ ALL MONSTERS CERTIFIED NON-APOCALYPTIC ⚡ FREE ADOPTION KITS ⚡ STAKE NOT INCLUDED ⚡
        </div>
      </div>

      <nav className="nav-bar">
        <Link to="/" className="[&.active]:bg-[--blood-red]">
          🏠 Home
        </Link>
        <Link to="/gallery" className="[&.active]:bg-[--blood-red]">
          👹 Browse Monsters
        </Link>
        <Link to="/cart" className="[&.active]:bg-[--blood-red]">
          🛒 Adoption Cart {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </Link>
        <Link to="/collection" className="[&.active]:bg-[--blood-red]">
          💝 My Collection
        </Link>
        <Link to="/about" className="[&.active]:bg-[--blood-red]">
          📜 About
        </Link>
        <Link to="/guestbook" className="[&.active]:bg-[--blood-red]">
          ✍️ Guestbook
        </Link>
      </nav>

      <div className="container">
        <Outlet />
      </div>

      <footer className="site-footer">
        <div className="footer-badges">
          <div className="badge">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect fill='%23000' width='88' height='31'/%3E%3Ctext x='44' y='20' fill='%2300FF00' text-anchor='middle' font-family='Comic Sans MS' font-size='12'%3EBest viewed in%3C/text%3E%3Ctext x='44' y='28' fill='%23FF00FF' text-anchor='middle' font-family='Comic Sans MS' font-size='8' font-weight='bold'%3EINTERNET EXPLORER 6%3C/text%3E%3C/svg%3E" alt="Best viewed in IE6" />
          </div>
          <div className="hit-counter">
            Visitors: 666013
          </div>
          <div className="badge">
            ⚠️ Sunnydale Approved ⚠️
          </div>
        </div>
        <p style={{ color: 'var(--lime-green)', fontSize: '0.9em' }}>
          © 2003 Buffy's Monster Adoption Center | Not affiliated with the Watchers Council
        </p>
        <p style={{ color: 'var(--hot-pink)', fontSize: '0.8em' }}>
          <span className="blink">★</span> Webring: Previous | Random | Next <span className="blink">★</span>
        </p>
      </footer>
    </div>
  );
}
