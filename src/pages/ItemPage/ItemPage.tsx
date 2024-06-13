import './ItemPage.scss';
import { ProductDetails } from '../../components/ProductDetails';
import { ScrollingList } from '../../components/ScrollingList';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { service } from '../../services/getAllProducts';
import { FC, useEffect, useState } from 'react';
import { ProductDetailed } from '../../types/ProductDetailed';
import { useParams } from 'react-router-dom';
import { Product } from '../../types/Product';
import { Category } from '../../types/Category';

type Props = {
  category: Category;
};

export const ItemPage: FC<Props> = ({ category }) => {
  const { itemId } = useParams();

  const [item, setItem] = useState<ProductDetailed>();
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [recommendedItems, setRecommendedItems] = useState<Product[]>();
  console.log(itemId);
  console.log(category);

  useEffect(() => {
    const fetchItem = async () => {
      let res;
      switch (category) {
        case 'phones':
          res = await service.getPhones();
          break;
        case 'tablets':
          res = await service.getTablets();
          break;
        case 'accessories':
          res = await service.getAccessories();
          break;
        default:
          throw new Error(`Unknown category: ${category}`);
      }
      const foundItem = res.find(item => item.id === itemId); // Пошук товару за itemId
      if (foundItem) {
        setItem(foundItem);
      } else {
        throw new Error('Item not found');
      }
    };

    fetchItem();
  }, [category, itemId]);

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
