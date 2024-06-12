import { FC } from 'react';
import { Product } from '../../types/Product';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { AddToFavButton } from '../AddToFavButton';

import './ProductCard.scss';

type Props = {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {

  return (
    <article className="productCard">
      <img
        className="productCard__image"
        src={product.image}
        alt="itemId"
      />
      <p className="productCard__title">
        {product.name}
      </p>
      <br />
      <div className="productCard__prices">
        <span className="productCard__prices-discount">${product.price}</span>
        <span className="productCard__prices-full">${product.fullPrice}</span>
      </div>

      <div className="productCard__params">
        <div className="productCard__params-pair">
          <p className="productCard__param">Screen</p>
          <p className="productCard__value">{product.screen}</p>
        </div>

        <div className="productCard__params-pair">
          <p className="productCard__param">Capacity</p>
          <p className="productCard__value">{product.capacity}</p>
        </div>

        <div className="productCard__params-pair">
          <p className="productCard__param">RAM</p>
          <p className="productCard__value">{product.ram}</p>
        </div>
      </div>

      <div className="productCard__buttons">
        <AddToCartButton product={product}/>
        <AddToFavButton product={product} />
      </div>
    </article>
  );
};
