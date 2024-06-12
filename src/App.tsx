import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';

import { Header } from './components/Header';
import { NewFooter } from './components/NewFooter';
// import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { ItemPage } from './pages/ItemPage';

export const App = () => (
  <div className="App">
    <Header />

    <main>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="phones" element={<p>Phones</p>} />
          <Route path="tablets" element={<p>Tablets</p>} />
          <Route path="accessories" element={<p>Accessories</p>} />
          <Route path="favourites" element={<p>Favourites</p>} />
          <Route path="cart" element={<CartPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
          <Route path="*" element={<ItemPage />} />
        </Route>
      </Routes>
    </main>

    <NewFooter />
  </div>
);
