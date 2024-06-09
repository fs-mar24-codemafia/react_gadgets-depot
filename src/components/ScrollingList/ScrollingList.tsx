import './ScrollingList.scss';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { ProductCard } from '../ProductCard';

type Props = {
  children: string;
};

export const ScrollingList: React.FC<Props> = ({ children }) => {
  const itemsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (itemsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = itemsRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const handleScroll = () => updateScrollButtons();

    const currentRef = itemsRef.current;

    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const onScrollLeft = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollBy({
        left: -500,
        behavior: 'smooth',
      });
    }
  };

  const onScrollRight = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollBy({
        left: 500,
        behavior: 'smooth',
      });
    }
  };

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
      <div className="scrollingList__items" ref={itemsRef}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};