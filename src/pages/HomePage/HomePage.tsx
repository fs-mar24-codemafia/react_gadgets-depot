import { HeroSlider } from '../../components/HeroSlider';
import { ScrollingList } from '../../components/ScrollingList';
import { ShopByCategory } from '../../components/ShopByCategory';
import { productsCategories } from '../../constants/constants';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Welcome to Nice Gadgets store!</h1>
      <section className="heroslider-wrapper">
        <HeroSlider />
      </section>
      <ScrollingList>Brand new models</ScrollingList>
      <ShopByCategory products={productsCategories} />
      <ScrollingList>Hot prices</ScrollingList>
    </div>
  );
};
