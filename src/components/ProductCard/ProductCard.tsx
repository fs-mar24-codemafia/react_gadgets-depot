import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Product } from '../../types/Product';

import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { AddToFavButton } from '../AddToFavButton';

import './ProductCard.scss';

type Props = {
  product: Product;
};

export const ProductCard: FC<Props> = ({ product }) => {
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
    <article className="productCard">
      <Link to={URL}>
        <img className="productCard__image" src={image} alt={name} />
        <p className="productCard__title">{name}</p>
        <div className="productCard__prices">
          <span className="productCard__prices-discount">${price}</span>
          <span className="productCard__prices-full">${fullPrice}</span>
        </div>
      </Link>

      <div className="productCard__params">
        <div className="productCard__params-pair">
          <p className="productCard__param">Screen</p>
          <p className="productCard__value">{screen}</p>
        </div>

        <div className="productCard__params-pair">
          <p className="productCard__param">Capacity</p>
          <p className="productCard__value">{capacity}</p>
        </div>

        <div className="productCard__params-pair">
          <p className="productCard__param">RAM</p>
          <p className="productCard__value">{ram}</p>
        </div>
      </div>

      <div className="productCard__buttons">
        <AddToCartButton product={product} />
        <AddToFavButton product={product} />
      </div>
    </article>
  );
};
