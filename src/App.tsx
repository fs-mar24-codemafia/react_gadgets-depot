import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';

// import { Header } from './components/Header';
import { NewFooter } from './components/NewFooter';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { CartPage } from './pages/CartPage';
import { ItemPage } from './pages/ItemPage';
import { FavPage } from './pages/FavPage';
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage';
import { NewHeader } from './components/NewHeader/NewHeader';

export const App = () => (
  <div className="App">
    <NewHeader />

    <main>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="phones">
            <Route index element={<ProductsPage category="phones" />} />
            <Route path=":itemId" element={<ItemPage category="phones" />} />
          </Route>
          <Route path="tablets">
            <Route index element={<ProductsPage category="tablets" />} />
            <Route path=":itemId" element={<ItemPage category="tablets" />} />
          </Route>
          <Route path="accessories">
            <Route index element={<ProductsPage category="accessories" />} />
            <Route
              path=":itemId"
              element={<ItemPage category="accessories" />}
            />
          </Route>
          <Route path="favourites" element={<FavPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </main>

    <NewFooter />
  </div>
);
