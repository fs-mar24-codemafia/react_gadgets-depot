import { useState, useEffect } from 'react';
import { ProductDetailed } from '../types/ProductDetailed';

const useItem = (item: ProductDetailed) => {
  const [bigImage, setBigImage] = useState<string>();

  useEffect(() => {
    setBigImage(item.images[0]);
  }, [item]);

  useEffect(() => {
    setBigImage(item.images[0]);

  }, [item]);

  const updateColor = (newColor: string) => {
    const currentURL = window.location.href;
    let parts = currentURL.split('-');
    parts[parts.length - 1] = newColor;
    const newURL = parts.join('-');

    window.location.href = newURL;
  };

  const updateStorage = (newStorage: string) => {
    const normNewStorage = newStorage.toLowerCase();
    const currentURL = window.location.href;
    let parts = currentURL.split('-');
    parts[parts.length - 2] = normNewStorage;
    const newURL = parts.join('-');

    window.location.href = newURL;
  };

  const fullTechSpecs = item
    ? [
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
      ]
    : [];

  return {
    bigImage,
    setBigImage,
    fullTechSpecs,
    ...item,
    updateColor,
    updateStorage,
  };
};

export default useItem;
