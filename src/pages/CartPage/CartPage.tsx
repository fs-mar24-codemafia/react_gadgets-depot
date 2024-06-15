import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './CartPage.scss';

import { CartContext } from '../../contexts/CartContext';
import { BackButton } from '../../components/BackButton';
import { EmptyCart } from '../EmptyCart';
import { CartItem } from './CartItem/CartItem';

export const CartPage = () => {
  const {
    cartItems,
    deleteItemFromCart,
    increaseAmount,
    decreaseAmount,
    clearCart,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0,
  );

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__content">
          <BackButton />

          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <h1 className="cart__title">Cart</h1>
              <div className="cart__items">
                {cartItems.map(item => (
                  <CartItem
                    key={item.product.id}
                    product={item.product}
                    quantity={item.quantity}
                    deleteItemFromCart={deleteItemFromCart}
                    increaseAmount={increaseAmount}
                    decreaseAmount={decreaseAmount}
                  />
                ))}
              </div>
              <div className="cart__total">
                <p className="cart__total-price">${totalPrice}</p>
                <p className="cart__items-count">
                  {cartItems.length === 1
                    ? 'Total for 1 item'
                    : `Total for ${cartItems.length} items`}
                </p>
                <Link
                  to="/checkout"
                  className="cart__checkout"
                  onClick={clearCart}
                >
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
