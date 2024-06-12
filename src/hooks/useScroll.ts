import { useRef, useState, useEffect } from 'react';

const useScroll = () => {
  const itemsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (itemsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = itemsRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth + 1);
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

  return { itemsRef, canScrollLeft, canScrollRight, onScrollLeft, onScrollRight };
};

export default useScroll;
