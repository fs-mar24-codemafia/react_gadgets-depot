import './ItemPage.scss';
import { ProductDetails } from '../../components/ProductDetails';
import { ScrollingList } from '../../components/ScrollingList';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { service } from '../../services/getAllProducts';
import { useEffect, useState } from 'react';
import { ProductDetailed } from '../../types/ProductDetailed';

export const ItemPage = () => {
  const itemId = 'apple-iphone-xs-max-256gb-spacegray';
  const [item, setItem] = useState<ProductDetailed>();

  useEffect(() => {
    service
      .getPhones()
      .then(res => setItem(res.find(item => item.id === itemId)));
  }, []);

  return (
    <>
      <div className="itempage">
        <BreadCrumbs />
        {item && <ProductDetails item={item}/>}
      </div>
      <ScrollingList children="You may also like" />
    </>
  );
};
