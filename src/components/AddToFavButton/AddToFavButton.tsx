import cn from 'classnames';
import { Product } from '../../types/Product';

import './AddToFavButton.scss';
import { useContext } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContext';

type Props = {
  product: Product;
}

export const AddToFavButton: React.FC<Props> = ({ product }) => {
  const { favorites, addProductToFav, deleteProductFromFav } = useContext(FavoritesContext)
  const isProductAdded = favorites.some(item => item.id === product.id);

  const handleClick = () => {
    if (isProductAdded) {
      deleteProductFromFav(product.id);
    }

    if (!isProductAdded) {
      addProductToFav(product);
    }
  }

  return (
    <div className={cn("iconFavour", { 'iconFavour--added': isProductAdded })} onClick={handleClick}>
      <i
        className={cn('ico ico-fav', { 'ico-fav-red': isProductAdded })}
      ></i>
    </div>
  )
};
