import React from 'react';
import { Link } from 'react-router-dom';

import { categories } from '../../constants/constants';

import './ShopByCategory.scss';

type ProductType = {
  category: string;
};

type ShopByCategoryProps = {
  products: ProductType[];
};

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({ products }) => {
  return (
    <div className="shop">
      <div className="shop__content">
        <h2 className="shop__title title--h2">Shop by category</h2>
        <div className="shop__categories" data-cy="categoryLinksContainer">
          {categories.map(({ name, src, linkTo }) => (
            <Link to={linkTo} className="shop__category" key={linkTo}>
              <div className="shop__category-img-box">
                <img
                  src={process.env.PUBLIC_URL + '/' + src}
                  alt={name}
                  className={`shop__category-img shop__category-img--${linkTo.slice(1)}`}
                />
              </div>
              <h3 className="shop__category-title">{name}</h3>
              <span className="shop__category-count">
                {`${products.filter(item => item.category === linkTo.slice(1)).length} models`}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
