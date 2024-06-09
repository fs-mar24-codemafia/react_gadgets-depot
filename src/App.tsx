import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { NewFooter } from './components/NewFooter';

import './App.scss';
export const App = () => (
  <div className="App">
    <Header />

    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis beatae, voluptates placeat quae adipisci odit fugit
                reiciendis optio, vitae culpa, officiis quaerat aliquid qui
                illum aperiam maiores iste quia reprehenderit vel dicta soluta
                explicabo! Facere cum sequi, deleniti nobis itaque unde non
                tenetur enim quas eligendi architecto inventore quia nihil
                maiores officia autem maxime blanditiis asperiores ex vitae
                magnam expedita. Reiciendis, nemo delectus a repellendus quaerat
                saepe mollitia exercitationem, voluptates ex voluptas placeat,
                numquam veniam. Delectus aliquid nesciunt non porro, vel laborum
                libero. Sunt animi debitis ullam numquam quas culpa ab ex
                facilis sit soluta. Incidunt quo, soluta sed quam animi
                doloribus error laudantium facere recusandae vel optio
                laboriosam atque corrupti voluptate quod cum in saepe autem
                eaque a fugiat reiciendis esse. Minima suscipit explicabo
                sapiente facilis consequatur, eligendi illo soluta maxime
                dolorem obcaecati? Eius, incidunt dolorem? In quas excepturi
                quibusdam aperiam, dolorum quaerat nam voluptatum, quam esse
                recusandae vero possimus omnis nostrum animi consequatur sit
                doloribus. Quis, dolores? Illum hic pariatur iste eligendi
                dolorem corrupti possimus sint adipisci in ad rerum tenetur
                perferendis rem incidunt omnis quisquam aliquam cupiditate,
                commodi, vitae sequi non distinctio maxime, quam quo? Veniam
                debitis, sunt itaque reiciendis quasi non? Voluptatum rerum iure
                eum quod.
              </p>
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
