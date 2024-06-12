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
          <Route path="phones">
            <Route index element={<p>Phones</p>} />
            <Route path=":itemId" element={<ItemPage />} />
          </Route>
          <Route path="tablets">
            <Route index element={<p>Tablets</p>} />
            <Route path=":itemId" element={<ItemPage />} />
          </Route>
          <Route path="accessories">
            <Route index element={<p>Accessories</p>} />
            <Route path=":itemId" element={<ItemPage />} />
          </Route>
          <Route path="favourites" element={<p>Favourites</p>} />
          <Route path="cart" element={<CartPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
          <Route path="*" element={<p>page not found</p>} />
        </Route>
      </Routes>
    </main>

    <NewFooter />
  </div>
);
