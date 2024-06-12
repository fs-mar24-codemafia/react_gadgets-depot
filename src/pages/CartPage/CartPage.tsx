import { Link } from 'react-router-dom';
import { useContext } from 'react';
import cn from 'classnames';

import './CartPage.scss';

import { CartContext } from '../../contexts/CartContext';
import { BackButton } from '../../components/BackButton';
import { EmptyCart } from '../EmptyCart';

export const CartPage = () => {
  const { cartItems, deleteItemFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0,
  );
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__content">
          <BackButton data-cy="backButton" />

          <h1 className="cart__title">Cart</h1>
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <div className="cart__items">
                {cartItems.map(item => (
                  <div key={item.product.id} className="cart__item">
                    <button
                      type="button"
                      aria-label="delete button"
                      className="cart__button-delete ico ico-close"
                      onClick={() => deleteItemFromCart(item.product.id)}
                    />
                    <Link
                      className="cart__product-link"
                      to={`/phones/${item.product.id}`}
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="cart__photo"
                      />
                    </Link>

                    <Link
                      to={`/product/${item.product.id}`}
                      className="cart__product-link cart__product-link-name"
                    >
                      <h2 className="cart__name">{item.product.name}</h2>
                    </Link>
                    <div className="cart__count-buttons">
                      <button
                        type="button"
                        disabled={item.quantity === 1}
                        className={cn('cart__button ico ico-minus', {
                          'ico-disabled-minus': item.quantity === 1,
                        })}
                        aria-label="minus"
                        onClick={() => decreaseAmount(item.product.id)}
                      />
                      {item.quantity}
                      <button
                        type="button"
                        className="cart__button ico ico-plus"
                        aria-label="plus"
                        onClick={() => increaseAmount(item.product.id)}
                      />
                    </div>
                    <span className="cart__price">
                      ${item.product.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
              <div className="cart__total">
                <p className="cart__total-price">${totalPrice}</p>
                <p className="cart__items-count">
                  {cartItems.length === 1
                    ? 'Total for 1 item'
                    : `Total for ${cartItems.length} items`}
                </p>
                <Link to="/checkout" className="cart__checkout">
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
