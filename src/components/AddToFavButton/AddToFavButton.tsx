import cn from 'classnames';
import { Product } from '../../types/Product';

import './AddToFavButton.scss';
import { useContext } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContext';

type Props = {
  product: Product;
};

export const AddToFavButton: React.FC<Props> = ({ product }) => {
  const { favorites, addProductToFav, deleteProductFromFav } =
    useContext(FavoritesContext);
  const isProductAdded = favorites.some(item => item.id === product.id);

  const handleClick = () => {
    if (isProductAdded) {
      deleteProductFromFav(product.id);
    }

    if (!isProductAdded) {
      addProductToFav(product);
    }
  };

  return (
    <button
      className={cn('add-to-fav', { 'add-to-fav--added': isProductAdded })}
      title="Add to favourites"
      onClick={handleClick}
    >
      <div className={cn('icon-fav', { 'icon-fav--added': isProductAdded })}>
        <i className={cn('ico ico-fav', { 'ico-fav-red': isProductAdded })}></i>
      </div>
    </button>
  );
};
