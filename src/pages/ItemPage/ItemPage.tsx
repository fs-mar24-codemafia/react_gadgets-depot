import './ItemPage.scss';
import { ProductDetails } from '../../components/ProductDetails';
import { ScrollingList } from '../../components/ScrollingList';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { service } from '../../services/getAllProducts';
import { useEffect, useState } from 'react';
import { ProductDetailed } from '../../types/ProductDetailed';
import { useParams } from 'react-router-dom';
import { Product } from '../../types/Product';

export const ItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState<ProductDetailed>();
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [recommendedItems, setRecommendedItems] = useState<Product[]>();

  useEffect(() => {
    service
      .getPhones()
      .then(res => setItem(res.find(item => item.id === itemId)));
  }, [itemId]);

  useEffect(() => {
    const fetchAllItems = async () => {
      const res = await service.getAllProducts();
      setCurrentProduct(res.find(product => product.itemId === item?.id));
      setRecommendedItems(
        res.filter(
          product =>
            product.fullPrice - (item?.priceRegular || 0) <= 150 &&
            product.category === item?.category,
        ),
      );
    };

    fetchAllItems();
  }, [item]);

  return (
    <>
      <div className="itempage">
        <BreadCrumbs />
        {item && currentProduct && (
          <ProductDetails productDetailed={item} product={currentProduct} />
        )}
      </div>
      {recommendedItems && (
        <ScrollingList products={recommendedItems}>
          You also may like
        </ScrollingList>
      )}
    </>
  );
};
