"use client";

import { createContext, useEffect, useState } from "react";

export interface Cart {
  id: number;
  name: string;
  price: number;
}

// Interfaz del contexto
interface CartContextProps {
  cart: Cart[];
  setCart: (cart: Cart[]) => void;
  emptyCart: () => void;
  removeFromCart: (index: number) => void; // Añadir la función para eliminar un producto
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  setCart: () => {},
  emptyCart: () => {},
  removeFromCart: () => {}, // Valor inicial vacío para la función
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(localCart);
  }, []);

  const emptyCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        emptyCart,
        removeFromCart, // Agregar la función en el provider
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
