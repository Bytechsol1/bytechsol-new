import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

const container = document.getElementById('root');

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Vite starts with an empty root; only server-rendered pages need hydration.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
