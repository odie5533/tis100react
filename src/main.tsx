import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AdoptionProvider } from './hooks/useAdoption.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdoptionProvider>
      <App />
    </AdoptionProvider>
  </StrictMode>
);
