import cn from 'classnames';
import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { Product } from '../../types/Product';

import './AddToCartButton.scss';
import { useTheme } from '../../contexts/ThemeContext';

type Props = {
  product: Product;
};

export const AddToCartButton: React.FC<Props> = ({ product }) => {
  const { cartItems, addItemToCart, deleteItemFromCart } =
    useContext(CartContext);
  const cartIncludesProduct = cartItems.some(
    item => item.product.id === product.id,
  );

  const handleClick = () => {
    if (cartIncludesProduct) {
      deleteItemFromCart(product.id);
    }

    if (!cartIncludesProduct) {
      addItemToCart(product);
    }
  };

  const { theme } = useTheme();

  return (
    <button
      className={cn('add-to-cart', {
        'add-to-cart--selected': cartIncludesProduct,
      })}
      onClick={handleClick}
      style={theme === 'dark' ? { color: 'var(--color-elements)' } : {}}
    >
      {cartIncludesProduct ? 'Added' : 'Add to cart'}
    </button>
  );
};
