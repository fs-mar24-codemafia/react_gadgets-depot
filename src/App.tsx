import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { NewFooter } from './components/NewFooter';

import './App.scss';
import { ScrollingList } from './components/ScrollingList/ScrollingList';

export const App = () => (
  <div className="App">
    <Header />

    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ScrollingList>New Brand Models</ScrollingList>
            }
          />
          <Route path="phones" element={<p>Phones</p>} />
          <Route path="tablets" element={<p>Tablets</p>} />
          <Route path="accessories" element={<p>Accessories</p>} />
          <Route path="favourites" element={<p>Favourites</p>} />
          <Route path="cart" element={<p>Cart</p>} />

          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Route>
      </Routes>
    </main>

    <NewFooter />
  </div>
);
