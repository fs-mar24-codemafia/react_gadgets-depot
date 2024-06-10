import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Product } from '../types/Product';

type ContextType = {
  favourites: Product[];
  addProductToFav: (product: Product) => void;
  deleteProductFromFav: (productId: number) => void;
};

export const FavouritesContext = React.createContext<ContextType>({
  favourites: [],
  addProductToFav: () => {},
  deleteProductFromFav: () => {},
});

type Props = {
  children: ReactNode;
};

export const FavouritesProvider: FC<Props> = ({ children }) => {
  const [favourites, setFavourites] = useState<Product[]>(JSON.parse(localStorage.getItem('favourites') || '[]'));

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  const addProductToFav = (product: Product) => {
    setFavourites(current => [...current, product]);
  };

  const deleteProductFromFav = (productId: number) => {
    setFavourites(current =>
      [...current].filter(product => product.id !== productId),
    );
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addProductToFav, deleteProductFromFav }}>
      {children}
    </FavouritesContext.Provider>
  );
};
