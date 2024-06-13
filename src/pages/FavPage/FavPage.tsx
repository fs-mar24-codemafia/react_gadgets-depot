import { useContext } from 'react';
import './FavPage.scss';

import { ProductCard } from '../../components/ProductCard';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { BackButton } from '../../components/BackButton';
import { EmptyFav } from '../EmptyFav';

export const FavPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      <div className="favourites">
        <BackButton />
        {!favorites.length ? (
          <EmptyFav />
        ) : (
          <>
            <div className="favourites__top">
              <div>
                <h1 className="favourites__title">Favourite products</h1>
                <p className="favourites__amount">
                  {favorites.length} product{favorites.length === 1 ? '' : 's'}{' '}
                  added to favourites
                </p>
              </div>
            </div>
            <ul className="favourites__list">
              {favorites.map(product => (
                <li key={product.id} className="favourites__item">
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};
