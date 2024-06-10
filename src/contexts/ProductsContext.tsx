import React, { FC, ReactNode, useState } from 'react';
import { Product } from '../types/Product';

type ContextType = {
  products: Product[];
  setProducts: (values: Product[]) => void;
};

export const ProductsContext = React.createContext<ContextType>({
  products: [],
  setProducts: () => {},
});

type Props = {
  children: ReactNode;
};

export const ProductsProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
