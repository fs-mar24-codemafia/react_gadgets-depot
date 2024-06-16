import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Product } from '../types/Product';

type CartItem = {
  quantity: number;
  product: Product;
};

type ContextType = {
  cartItems: CartItem[];
  addItemToCart: (product: Product) => void;
  deleteItemFromCart: (productId: number) => void;
  increaseAmount: (productId: number) => void;
  decreaseAmount: (productId: number) => void;
  clearCart: () => void;
};

export const CartContext = React.createContext<ContextType>({
  cartItems: [],
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  increaseAmount: () => {},
  decreaseAmount: () => {},
  clearCart: () => {},
});

type Props = {
  children: ReactNode;
};

export const CartProvider: FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(window.localStorage.getItem('cartItems') || '[]'),
  );

  useEffect(() => {
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product: Product) => {
    setCartItems([...cartItems, { product, quantity: 1 }]);
  };

  const deleteItemFromCart = (productId: number) => {
    setCartItems([...cartItems].filter(item => item.product.id !== productId));
  };

  const increaseAmount = (productId: number) => {
    const currentIndex = cartItems.findIndex(
      item => item.product.id === productId,
    );
    const newItems = [...cartItems];

    newItems[currentIndex].quantity = newItems[currentIndex].quantity + 1;
    setCartItems([...newItems]);
  };

  const decreaseAmount = (productId: number) => {
    const currentIndex = cartItems.findIndex(
      item => item.product.id === productId,
    );
    let newItems = [...cartItems];

    newItems[currentIndex].quantity = newItems[currentIndex].quantity - 1;

    if (newItems[currentIndex].quantity === 0) {
      newItems = newItems.filter(item => item.product.id !== productId);
    }

    setCartItems([...newItems]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addItemToCart,
    deleteItemFromCart,
    increaseAmount,
    decreaseAmount,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
