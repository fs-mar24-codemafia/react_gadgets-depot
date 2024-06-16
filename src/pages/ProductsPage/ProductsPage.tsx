import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';

import { service } from '../../services/getAllProducts';

import { Product } from '../../types/Product';
import { Category } from '../../types/Category';

import { ProductCard } from '../../components/ProductCard';
import { ProductCardHorizontal } from '../../components/ProductCardHorizontal';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { DropDown } from './DropDown';
import { Pagination } from './Pagination';
import { Loader } from '../../components/Loader/Loader';

import './ProductsPage.scss';

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
  const [listView, setListView] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sort') || 'newest';
  const itemsPerPage = searchParams.get('perPage') || '16';
  const currentPage = +(searchParams.get('page') || 1);
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
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
  }, [category]);

  const handlePageChange = (value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(value));
    setSearchParams(params);
  };

  const handleSortByClick = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', value);
    params.set('page', String(1));
    setSearchParams(params);
  };

  const handleShowItemsClick = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('perPage', value);
    params.set('page', String(1));
    setSearchParams(params);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set('search', event.target.value.trimStart());
    params.set('page', String(1));
    setSearchParams(params);
  };

  const filteredProducts = products.filter(product =>
    product.name
      .toLowerCase()
      .trim()
      .includes(searchQuery.toLowerCase().trim()),
  );
  const sortedProducts = sortProducts(filteredProducts, sortBy);

  const pagesExist = itemsPerPage === 'all';
  const totalPages = pagesExist
    ? 0
    : Math.ceil(filteredProducts.length / +itemsPerPage);

  const startIndex = currentPage === 1 ? 0 : +itemsPerPage * (currentPage - 1);
  const endIndex = startIndex + +itemsPerPage;

  const visibleProducts = pagesExist
    ? sortedProducts
    : sortedProducts.slice(startIndex, endIndex);

  return (
    <div className="products">
      <div className="products__top">
        <BreadCrumbs />

        <div>
          <h1 className="products__title">{category}</h1>
          <p className="products__amount">{filteredProducts.length} models</p>
        </div>

        <div className="products__filters">
          <div className="products__filters-wrapper-l">
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
          <div className="products__filters-wrapper-r">
            <div className="products__view-wrp">
              <button
                className="products__view-btn"
                title="Chenge view style"
                onClick={() => setListView(!listView)}
              >
                <i
                  className={cn('ico products__view-icon', {
                    'ico-list': !listView,
                    'ico-grid': listView,
                  })}
                ></i>
              </button>
            </div>
            <div className="products__filter--search">
              <input
                className="products__filter-search-input"
                type="text"
                placeholder="Search products"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="products__loader">
          <Loader />
        </div>
      )}

      {!isLoading && (
        <>
          <ul
            className="products__list"
            style={listView ? { display: 'block' } : {}}
          >
            {visibleProducts.map(product => (
              <li key={product.id} className="products__item">
                {!listView ? (
                  <ProductCard product={product} />
                ) : (
                  <ProductCardHorizontal product={product} />
                )}
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
