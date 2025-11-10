import { createFileRoute } from '@tanstack/react-router'
import { monsters } from '../monsters'
import { MonsterProfilePage } from '../pages/MonsterProfilePage'

export const Route = createFileRoute('/monster/$monsterId')({
  loader: ({ params }: { params: { monsterId: string } }) => {
    const monster = monsters.find(m => m.id === parseInt(params.monsterId, 10));
    if (!monster) {
      throw new Error('Monster not found');
    }
    return monster;
  },
  component: MonsterProfilePage
})
