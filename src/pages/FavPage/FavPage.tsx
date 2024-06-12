import { useContext } from 'react';
import './FavPage.scss';
import { ProductCard } from '../../components/ProductCard';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { FavoritesContext } from '../../contexts/FavoritesContext';

export const FavPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      {!favorites.length ? (
        'Empty'
      ) : (
        <div className="products">
          <div className="products__top">
            <BreadCrumbs />

            <div>
              <h1 className="products__title">Favourite products</h1>
              <p className="products__amount">
                {favorites.length} product{favorites.length === 1 ? '' : 's'}{' '}
                added to favourites
              </p>
            </div>
          </div>
          <ul className="products__list">
            {favorites.map(product => (
              <li key={product.id} className="products__item">
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
