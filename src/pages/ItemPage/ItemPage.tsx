import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProductDetailed } from '../../types/ProductDetailed';
import { Product } from '../../types/Product';
import { Category } from '../../types/Category';
import { service } from '../../services/getAllProducts';

import { ProductDetails } from '../../components/ProductDetails';
import { ScrollingList } from '../../components/ScrollingList';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { Loader } from '../../components/Loader/Loader';

import './ItemPage.scss';

type Props = {
  category: Category;
};

export const ItemPage: FC<Props> = ({ category }) => {
  const { itemId } = useParams();

  const [item, setItem] = useState<ProductDetailed>();
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [recommendedItems, setRecommendedItems] = useState<Product[]>();
  const isLoading = currentProduct === undefined;

  const getItemModel = (itemId: string = '0') => {
    return itemId.split('-').slice(0, -2).join('-');
  };

  const itemModel = getItemModel(itemId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [itemModel]);

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
      const foundItem = res.find(item => item.id === itemId);
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
            Math.abs(product.fullPrice - (item?.priceRegular || 0)) <= 200 &&
            product.category === item?.category &&
            getItemModel(product.itemId) !== itemModel,
        ),
      );
    };

    fetchAllItems();
  }, [item, itemModel]);

  return (
    <>
      {isLoading ? (
        <div className="itempage">
          <div className="itempage__bread-crumbs-wrapper">
            <BreadCrumbs />
          </div>
          <div className="itempage__loader-wrapper">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="itempage">
          <div className="itempage__bread-crumbs-wrapper">
            <BreadCrumbs />
          </div>
          {item && currentProduct && (
            <ProductDetails productDetailed={item} product={currentProduct} />
          )}
        </div>
      )}

      {recommendedItems && !isLoading && (
        <ScrollingList products={recommendedItems}>
          You also may like
        </ScrollingList>
      )}
    </>
  );
};
