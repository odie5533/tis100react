import { Link } from '@tanstack/react-router';
import { Route } from '../routes/monster.$monsterId';

export function MonsterProfilePage() {
  const monster = Route.useLoaderData();

  return (
    <div>
      <h1>{monster.name}</h1>
      <img src={monster.image} alt={monster.name} />
      <p>{monster.bio}</p>
      <Link to="/adopt">Adopt Me!</Link>
    </div>
  );
}
