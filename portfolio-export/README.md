# Portfolio Export

This directory contains a self-contained version of the Portfolio page, including its design, content, and images.

## Contents

- `PortfolioPage.tsx`: The main React component for the portfolio.
- `ThemeContext.tsx`: Context provider for light/dark mode.
- `ImageWithFallback.tsx`: A utility component for handling image loading errors.
- `assets/portfolio/`: All images used in the portfolio.

## Integration Instructions

1. **Install Dependencies**:
   Ensure your project has the following dependencies installed:
   ```bash
   npm install framer-motion lucide-react
   ```

2. **Copy Files**:
   - Move the `assets/portfolio` folder to your project's `public` or `src/assets` directory.
   - Update the image paths in `PortfolioPage.tsx` if you move the assets to a different location.
   - Add the `.tsx` files to your components directory.

3. **Wrap with ThemeProvider**:
   In your main `App.tsx` or layout file, wrap your application (or just the portfolio section) with the `ThemeProvider`:
   ```tsx
   import { ThemeProvider } from './ThemeContext';
   import { PortfolioPage } from './PortfolioPage';

   function App() {
     return (
       <ThemeProvider>
         <PortfolioPage />
       </ThemeProvider>
     );
   }
   ```

4. **Tailwind CSS**:
   This component uses Tailwind CSS for styling. Ensure your `tailwind.config.js` is set up to scan the new files.

## Note on Styles
The components use standard Tailwind classes. If you have custom colors defined in your existing `tailwind.config.js` (like `brand-bg`), you may need to map them or replace them with standard Tailwind colors (e.g., `bg-blue-600`).
