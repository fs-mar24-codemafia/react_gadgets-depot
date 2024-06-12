import { useEffect, useState } from 'react';
import { HeroSlider } from '../../components/HeroSlider';
import { ScrollingList } from '../../components/ScrollingList';
import { ShopByCategory } from '../../components/ShopByCategory';
import { productsCategories } from '../../constants/constants';
import './HomePage.scss';
import { Product } from '../../types/Product';
import { service } from '../../services/getAllProducts';

export const HomePage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const getNewModels = (models: Product[]) => {
    return models.filter(model => model.year === 2022);
  };

  const getHotPrices = (products: Product[]) => {
    return products.sort((a, b) => (b.fullPrice - b.price) - (a.fullPrice - a.price));
  }

  useEffect(() => {
    service.getAllProducts().then((products) => setAllProducts(products));
  }, []);

  const newModels = getNewModels(allProducts);
  const hotPrices = getHotPrices(allProducts);

  return (
    <div className="homepage">
      <h1 className="homepage__title">Welcome to Nice Gadgets store!</h1>
      <section className="heroslider-wrapper">
        <HeroSlider />
      </section>
      <ScrollingList products={newModels}>Brand new models</ScrollingList>
      <ShopByCategory products={productsCategories} />
      <ScrollingList products={hotPrices}>Hot prices</ScrollingList>
    </div>
  );
};
