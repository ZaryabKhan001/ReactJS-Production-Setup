import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { initSentry } from '@shared/configs/sentry.ts';
import { Providers } from '@shared/components/index.ts';

initSentry();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
