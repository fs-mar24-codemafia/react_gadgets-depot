import './EmptyFav.scss';

export const EmptyFav = () => {
  return (
    <div className="favIsEmpty">
      <h1 className="favIsEmpty__message">Your favourites is empty</h1>
      <h2 className="favIsEmpty__advice">
        Explore our catalog to find products
      </h2>

      <div className="favIsEmpty__image-wrapper">
        <img
          src="img/fav-is-empty.png"
          alt="cart-is-empty"
          className="favIsEmpty__img"
        />
      </div>
    </div>
  );
};
