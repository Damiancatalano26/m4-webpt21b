"use client";

import { createContext, useEffect, useState } from "react";

export interface Cart {
  id: number;
  name: string;
  price: number;
}

// Crea interface del context
interface CartContextProps {
  cart: Cart[];
  setCart: (cart: Cart[]) => void;
  emptyCart: () => void;
}

// Creo el contexto, donde guardaremos los datos
export const CartContext = createContext<CartContextProps>({
  cart: [],
  setCart: () => {},
  emptyCart: () => {},
});

// Crear el provider
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  // Guardar el carrito en localStorage cada vez que cambia
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Cargar el carrito desde localStorage al inicio
  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(localCart);
  }, []);

  // Vaciar el carrito
  const emptyCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
