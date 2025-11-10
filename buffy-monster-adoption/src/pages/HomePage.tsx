import { monsters } from '../monsters';
import { Link } from '@tanstack/react-router';

export function HomePage() {
  return (
    <div>
      <h1>Welcome to the Hellmouth</h1>
      <p>Your one-stop shop for adopting misunderstood monsters.</p>
      <ul>
        {monsters.map((monster) => (
          <li key={monster.id}>
            <Link to="/monster/$monsterId" params={{ monsterId: monster.id.toString() }}>
              <img src={monster.image} alt={monster.name} />
              <h2>{monster.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
