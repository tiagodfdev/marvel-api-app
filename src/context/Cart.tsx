import React, { createContext, useContext, useState } from 'react';
import { ICard } from '../types';
/* @ts-ignore */
const CartContext = createContext();

export default function CartProvider({ children }:any) {
  const [cart, setCart] = useState<ICard[]|[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext<any>(CartContext);
  const { cart, setCart } = context;
  return { cart, setCart };
}
