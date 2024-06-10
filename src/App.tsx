import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';

import { Header } from './components/Header';
import { NewFooter } from './components/NewFooter';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { ProductDetails } from './components/ProductDetails';

export const App = () => (
  <div className="App">
    <Header />

    <main>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="phones" element={<ProductDetails />} />
          <Route path="tablets" element={<p>Tablets</p>} />
          <Route path="accessories" element={<p>Accessories</p>} />
          <Route path="favourites" element={<p>Favourites</p>} />
          <Route path="cart" element={<p>Cart</p>} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </main>

    <NewFooter />
  </div>
);
