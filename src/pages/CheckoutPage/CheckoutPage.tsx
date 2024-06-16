import { Link } from 'react-router-dom';

import './CheckoutPage.scss';

export const CheckoutPage = () => {
  return (
    <div className="checkoutPage">
      <h1 className="checkoutPage__result">
        Your order has been successfully placed!
      </h1>
      <h2 className="checkoutPage__gratitude">
        Thank you for shopping with us!
      </h2>

      <div className="checkoutPage__image-wrapper">
        <img
          src="img/buy-complete.png"
          alt="order-successful"
          className="checkoutPage__img"
        />
      </div>

      <div className="checkoutPage__container">
        <Link to="/" className="checkoutPage__continue-shopping">
          Continue shopping
        </Link>
      </div>
    </div>
  );
};
