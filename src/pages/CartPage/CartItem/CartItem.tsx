import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import './CartItem.scss';

type Props = {
  product: {
    id: number;
    category: string;
    itemId: string;
    name: string;
    image: string;
    price: number;
  };
  quantity: number;
  deleteItemFromCart: (id: number) => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
};

export const CartItem: React.FC<Props> = ({
  product,
  quantity,
  deleteItemFromCart,
  increaseAmount,
  decreaseAmount,
}) => {
  return (
    <div className="cart-item">
      <div className="gadget">
        <button
          type="button"
          aria-label="delete button"
          className="cart-item__button-delete ico ico-close"
          onClick={() => deleteItemFromCart(product.id)}
        />
        <Link
          className="cart-item__product-link"
          to={`/${product.category}/${product.itemId}`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="cart-item__photo"
          />
        </Link>

        <Link
          to={`/${product.category}/${product.itemId}`}
          className="cart-item__product-link cart-item__product-link--name"
        >
          <h2 className="cart-item__name">{product.name}</h2>
        </Link>
      </div>

      <div className="sum">
        <div className="cart-item__count-buttons">
          <button
            type="button"
            disabled={quantity === 1}
            className={cn('cart-item__button ico ico-minus', {
              'ico-disabled-minus': quantity === 1,
            })}
            aria-label="minus"
            onClick={() => decreaseAmount(product.id)}
          />
          {quantity}
          <button
            type="button"
            className="cart-item__button ico ico-plus"
            aria-label="plus"
            onClick={() => increaseAmount(product.id)}
          />
        </div>
        <span className="cart-item__price">${product.price * quantity}</span>
      </div>
    </div>
  );
};
