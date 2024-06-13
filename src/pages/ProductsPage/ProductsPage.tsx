import { FC, useEffect, useState } from 'react';
import './ProductsPage.scss';
import { Product } from '../../types/Product';
import { service } from '../../services/getAllProducts';
import { Category } from '../../types/Category';
import { ProductCard } from '../../components/ProductCard';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { DropDown } from './DropDown';
import { Pagination } from './Pagination';
import { Loader } from '../../components/Loader/Loader';

interface Props {
  category: Category;
}

const sortByOptions = ['newest', 'alphabetically', 'cheapest'];
const itemsOnPage = ['4', '8', '16', 'all'];

const sortProducts = (products: Product[], sortBy: string) => {
  let sortedProducts = products;

  if (sortBy === 'newest') {
    return sortedProducts.sort(
      (product1, product2) => product2.year - product1.year,
    );
  }

  if (sortBy === 'alphabetically') {
    return sortedProducts.sort((product1, product2) =>
      product1.name.localeCompare(product2.name),
    );
  }

  if (sortBy === 'cheapest') {
    return sortedProducts.sort(
      (product1, product2) => product1.price - product2.price,
    );
  }

  return sortedProducts;
};

export const ProductsPage: FC<Props> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [itemsPerPage, setItemsPerPage] = useState('16');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
    setIsLoading(true);

    service
      .getAllProducts()
      .then(res =>
        setProducts(res.filter(product => product.category === category)),
      )
      .catch(() => {
        throw new Error('Something went wrong');
      })
      .finally(() => setIsLoading(false));
  }, [category, itemsPerPage]);

  const handleSortByClick = (value: string) => setSortBy(value);
  const handleShowItemsClick = (value: string) => setItemsPerPage(value);
  const handlePageChange = (value: number) => setCurrentPage(value);

  const pagesExist = itemsPerPage === 'all';
  const totalPages = pagesExist
    ? 0
    : Math.ceil(products.length / +itemsPerPage);

  const startIndex = currentPage === 1 ? 0 : +itemsPerPage * (currentPage - 1);
  const endIndex = startIndex + +itemsPerPage;

  const sortedProducts = sortProducts(products, sortBy);
  const visibleProducts = pagesExist
    ? sortedProducts
    : sortedProducts.slice(startIndex, endIndex);

  return (
    <div className="products">
      <div className="products__top">
        <BreadCrumbs />

        <div>
          <h1 className="products__title">{category}</h1>
          <p className="products__amount">{products.length} models</p>
        </div>

        <div className="products__filters">
          <div className="products__filter products__filter--sort-by">
            <p className="products__filter-label">Sort by</p>
            <DropDown
              options={sortByOptions}
              chosenOption={sortBy}
              onClick={handleSortByClick}
            />
          </div>

          <div className="products__filter products__filter--items">
            <p className="products__filter-label">Items on page</p>
            <DropDown
              options={itemsOnPage}
              chosenOption={itemsPerPage}
              onClick={handleShowItemsClick}
            />
          </div>
        </div>
      </div>

      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <ul className="products__list">
            {visibleProducts.map(product => (
              <li key={product.id} className="products__item">
                <ProductCard product={product} />
              </li>
            ))}
          </ul>

          <div className="products__pagination">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};
