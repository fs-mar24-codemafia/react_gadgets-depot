import './ItemPage.scss';
import { ProductDetails } from '../../components/ProductDetails';
import { ScrollingList } from '../../components/ScrollingList';
import { BreadCrumbs } from '../../components/BreadCrumbs';

export const ItemPage = () => {
  return (
    <>
      <div className="itempage">
        <BreadCrumbs />
        <ProductDetails />
      </div>
      <ScrollingList children="You may also like" />
    </>
  );
};
