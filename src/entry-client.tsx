import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming your main component is App.tsx

// Import the global CSS. This step is necessary because the original 
// index.css import was in the now-redundant main.jsx file. [27:00]
import './index.css';

// We use hydrateRoot instead of createRoot/render because we are attaching 
// to already-rendered HTML (SSR).
ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <App />
);