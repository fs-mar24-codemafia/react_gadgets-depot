import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Product } from '../../types/Product';

import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { AddToFavButton } from '../AddToFavButton';

import './ProductCardHorizontal.scss';

type Props = {
  product: Product;
};

export const ProductCardHorizontal: FC<Props> = ({ product }) => {
  const {
    itemId,
    category,
    image,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
  } = product;

  const URL = `/${category}/${itemId}`;

  return (
    <article className="productCardHorizontal">
      <Link to={URL} className="productCardHorizontal__link">
        <img className="productCardHorizontal__image" src={image} alt={name} />
      </Link>
      <div className="productCardHorizontal__details">
        <div className="productCardHorizontal__top-wrapper">
          <Link to={URL} className="productCardHorizontal__link">
            <p className="productCardHorizontal__title">{name}</p>
            <div className="productCardHorizontal__prices">
              <span className="productCardHorizontal__prices-discount">
                ${price}
              </span>
              <span className="productCardHorizontal__prices-full">
                ${fullPrice}
              </span>
            </div>
          </Link>
          <div className="productCardHorizontal__buttons">
            <AddToCartButton product={product} />
            <AddToFavButton product={product} />
          </div>
        </div>
        <div className="productCardHorizontal__params">
          <div className="productCardHorizontal__params-pair">
            <p className="productCardHorizontal__param">Screen</p>
            <p className="productCardHorizontal__value">{screen}</p>
          </div>
          <div className="productCardHorizontal__params-pair">
            <p className="productCardHorizontal__param">Capacity</p>
            <p className="productCardHorizontal__value">{capacity}</p>
          </div>
          <div className="productCardHorizontal__params-pair">
            <p className="productCardHorizontal__param">RAM</p>
            <p className="productCardHorizontal__value">{ram}</p>
          </div>
        </div>
        {/* <div className="productCardHorizontal__buttons">
          <AddToCartButton product={product} />
          <AddToFavButton product={product} />
        </div> */}
      </div>
    </article>
  );
};
