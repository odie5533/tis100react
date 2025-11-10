import { createLazyFileRoute } from '@tanstack/react-router'
import { MyMonstersPage } from '../pages/MyMonstersPage'

export const Route = createLazyFileRoute('/monsters')({
  component: MyMonstersPage,
})
