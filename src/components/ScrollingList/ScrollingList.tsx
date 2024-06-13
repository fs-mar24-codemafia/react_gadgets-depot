import './ScrollingList.scss';
import cn from 'classnames';

import { ProductCard } from '../ProductCard';
import useScroll from '../../hooks/useScroll';
import { Product } from '../../types/Product';
import { Loader } from '../Loader/Loader';

type Props = {
  children: string;
  products: Product[];
};

export const ScrollingList: React.FC<Props> = ({ children, products }) => {
  const {
    itemsRef,
    canScrollLeft,
    canScrollRight,
    onScrollLeft,
    onScrollRight,
  } = useScroll();

  const isLoading = products.length === 0;

  return (
    <section className="scrollingList">
      <div className="scrollingList__top">
        <h2 className="scrollingList__title">{children}</h2>
        <div className="scrollingList__buttons">
          <button
            className={cn('dirButton dirButton--left', {
              'dirButton--left-disabled': !canScrollLeft,
            })}
            onClick={onScrollLeft}
            disabled={!canScrollLeft}
          ></button>
          <button
            className={cn('dirButton dirButton--right', {
              'dirButton--right-disabled': !canScrollRight,
            })}
            onClick={onScrollRight}
            disabled={!canScrollRight}
          ></button>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="scrollingList__items" ref={itemsRef}>
          {products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </section>
  );
};
