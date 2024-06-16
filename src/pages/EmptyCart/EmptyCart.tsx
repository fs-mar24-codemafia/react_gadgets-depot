import './EmptyCart.scss';

export const EmptyCart = () => {
  return (
    <div className="cartIsEmpty">
      <h1 className="cartIsEmpty__message">Your cart is empty</h1>
      <h2 className="cartIsEmpty__advice">
        Explore our catalog to find products
      </h2>

      <div className="cartIsEmpty__image-wrapper">
        <img
          src="img/cart-is-empty.png"
          alt="cart-is-empty"
          className="cartIsEmpty__img"
        />
      </div>
    </div>
  );
};
