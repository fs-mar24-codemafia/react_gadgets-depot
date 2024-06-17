import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Product } from '../../types/Product';
import { service } from '../../services/getAllProducts';

import { HeroSlider } from '../../components/HeroSlider';
import { ScrollingList } from '../../components/ScrollingList';
import { ShopByCategory } from '../../components/ShopByCategory';

import './HomePage.scss';

export const HomePage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const { t } = useTranslation();

  const getNewModels = (models: Product[]) => {
    return models.filter(model => model.year === 2022);
  };

  const getHotPrices = (products: Product[]) => {
    return products.sort(
      (a, b) => b.fullPrice - b.price - (a.fullPrice - a.price),
    );
  };

  useEffect(() => {
    service.getAllProducts().then(products => setAllProducts(products));
  }, []);

  const newModels = getNewModels(allProducts);
  const hotPrices = getHotPrices(allProducts);

  return (
    <div className="homepage">
      <h1 className="homepage__title">{t('welcome')}</h1>
      <section className="heroslider-wrapper">
        <HeroSlider />
      </section>
      <ScrollingList products={newModels}>{t('sliders.new')}</ScrollingList>
      <ShopByCategory products={allProducts} />
      <ScrollingList products={hotPrices}>{t('sliders.hot')}</ScrollingList>
    </div>
  );
};
