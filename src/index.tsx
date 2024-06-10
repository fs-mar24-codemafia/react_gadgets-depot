import { createRoot } from 'react-dom/client';
import { App } from './App';
import { HashRouter as Router } from 'react-router-dom';
import { FavouritesProvider } from './contexts/FavouritesContext';
import { CartProvider } from './contexts/CartContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <FavouritesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavouritesProvider>
  </Router>,
);
