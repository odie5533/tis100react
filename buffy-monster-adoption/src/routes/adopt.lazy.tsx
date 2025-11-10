import { createLazyFileRoute } from '@tanstack/react-router'
import { AdoptionFormPage } from '../pages/AdoptionFormPage'

export const Route = createLazyFileRoute('/adopt')({
  component: AdoptionFormPage,
})
