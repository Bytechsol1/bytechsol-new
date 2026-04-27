import React, { StrictMode } from 'react';
// Import createRoot for client-side rendering and hydrateRoot for prerendered content
import { createRoot, hydrateRoot } from 'react-dom/client'; 
import './index.css';
import App from './App.tsx';

// Find the root container
const container = document.getElementById('root');

if (container) {
  // Check if the container has child nodes (meaning content was pre-rendered by React Snap)
  if (container.hasChildNodes()) {
    // If pre-rendered, use hydrateRoot to attach event listeners to the existing HTML
    hydrateRoot(
      container,
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    // If not pre-rendered (e.g., in development), use createRoot to render normally
    createRoot(container).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
} else {
  // Safety check
  console.error('The root element with ID "root" was not found in the document.');
}