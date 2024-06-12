import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Product } from '../types/Product';

type ContextType = {
  favorites: Product[];
  addProductToFav: (product: Product) => void;
  deleteProductFromFav: (productId: number) => void;
};

export const FavoritesContext = React.createContext<ContextType>({
  favorites: [],
  addProductToFav: () => {},
  deleteProductFromFav: () => {},
});

type Props = {
  children: ReactNode;
};

export const FavoritesProvider: FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>(JSON.parse(window.localStorage.getItem('favorites') || '[]'));

  console.log(favorites);

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addProductToFav = (product: Product) => {
    setFavorites(current => [...current, product]);
  };

  const deleteProductFromFav = (productId: number) => {
    setFavorites(current =>
      [...current].filter(product => product.id !== productId),
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addProductToFav, deleteProductFromFav }}>
      {children}
    </FavoritesContext.Provider>
  );
};
