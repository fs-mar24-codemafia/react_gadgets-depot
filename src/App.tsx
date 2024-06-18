import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import './App.scss';

import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CartPage } from './pages/CartPage';
import { ItemPage } from './pages/ItemPage';
import { FavPage } from './pages/FavPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== prevLocation.pathname) {
      setPrevLocation(location);
    }
  }, [location, prevLocation.pathname]);

  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    initial: null,
    config: { duration: 300 },
    keys: location => location.pathname,
  });

  return (
    <div className="App">
      <Header />
      <div style={{ position: 'relative' }}>
        {transitions((style, item) =>
          item ? (
            <animated.div
              style={{
                ...style,
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            >
              <main>
                <Routes location={item}>
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path="phones"
                    element={<ProductsPage category="phones" />}
                  />
                  <Route
                    path="phones/:itemId"
                    element={<ItemPage category="phones" />}
                  />
                  <Route
                    path="tablets"
                    element={<ProductsPage category="tablets" />}
                  />
                  <Route
                    path="tablets/:itemId"
                    element={<ItemPage category="tablets" />}
                  />
                  <Route
                    path="accessories"
                    element={<ProductsPage category="accessories" />}
                  />
                  <Route
                    path="accessories/:itemId"
                    element={<ItemPage category="accessories" />}
                  />
                  <Route path="favourites" element={<FavPage />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="home" element={<Navigate to="/" replace />} />
                  <Route path="*" element={<NotFoundPage />} />
                  <Route path="checkout" element={<CheckoutPage />} />
                </Routes>
              </main>
              <Footer />
            </animated.div>
          ) : null,
        )}
      </div>
    </div>
  );
};
