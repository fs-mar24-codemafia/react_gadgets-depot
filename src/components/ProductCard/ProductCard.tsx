import { Button } from '../Button/Button';
import { IconFavour } from '../IconFavour';
import './ProductCard.scss';

export const ProductCard = () => {
  const buttonText = true ? 'Add to cart' : 'Added to cart';
  const toggleFavourites = () => {};
  const toggleAddedToCart = () => {};

  return (
    <article className="productCard">
      <img
        className="productCard__image"
        src="img/phones/apple-iphone-11-pro-max/spacegray/00.webp"
        alt="itemId"
      />
      <p className="productCard__title">
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </p>
      <div className="productCard__prices">
        <span className="productCard__prices-discount">$700</span>
        <span className="productCard__prices-full">$799</span>
      </div>

      <div className="productCard__params">
        <div className="productCard__params-pair">
          <p className="productCard__param">Screen</p>
          <p className="productCard__value">5.8” OLED</p>
        </div>

        <div className="productCard__params-pair">
          <p className="productCard__param">Capacity</p>
          <p className="productCard__value">64 GB</p>
        </div>

        <div className="productCard__params-pair">
          <p className="productCard__param">RAM</p>
          <p className="productCard__value">4 GB</p>
        </div>
      </div>

      <div className="productCard__buttons">
        <Button children={buttonText} handleClick={toggleAddedToCart} />
        <IconFavour handleClick={toggleFavourites} />
      </div>
    </article>
  );
};
