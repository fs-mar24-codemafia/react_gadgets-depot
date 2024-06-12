import { useState, useEffect } from 'react';
import { ProductDetailed } from '../types/ProductDetailed';

const useItem = (item: ProductDetailed) => {
  const [bigImage, setBigImage] = useState<string>();

  useEffect(() => {
    setBigImage(item.images[0]);
  }, [item]);

  const buttonText = true ? 'Add to cart' : 'Added to cart';

  const fullTechSpecs = item ? [
    { Screen: item.screen },
    { Resolution: item.resolution },
    { Processor: item.processor },
    { RAM: item.ram },
    { 'Built in memory': item.capacityAvailable },
    { Camera: item.camera },
    { Zoom: item.zoom },
    {
      Cell: item.cell.map((el, index) =>
        index === item.cell.length - 1 ? el : el + ', ',
      ),
    },
  ] : [];

  return {
    bigImage,
    setBigImage,
    buttonText,
    fullTechSpecs,
    ...item,
  };
};

export default useItem;
