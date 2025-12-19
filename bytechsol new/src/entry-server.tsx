import { renderToString } from 'react-dom/server';
import App from './App'; // Assuming your main component is App.tsx

// This function is exported and called by the server.js file to get the 
// initial HTML content.
export function render() {
  // renderToString renders your component to its initial HTML. [10:30]
  return renderToString(<App />);
}