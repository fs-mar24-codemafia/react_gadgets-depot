import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';

import { Header } from './components/Header';
import { NewFooter } from './components/NewFooter';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';

export const App = () => (
  <div className="App">
    <Header />

    <main>
    <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="phones">
            <Route index element={<ProductsPage category='phones' />} />
            <Route path=':productId' element={<p>Some product info</p>} />
          </Route>
          <Route path="tablets">
            <Route index element={<ProductsPage category='tablets' />} />
            <Route path=':productId'/>
          </Route>
          <Route path="accessories" >
            <Route index element={<ProductsPage category='accessories' />}/>
            <Route path=':productId' />
          </Route>
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
