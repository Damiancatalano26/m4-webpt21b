/*"use client";

import { UserSession, Order } from "@/app/interfaces";
import { createContext, useEffect, useState } from "react";

// Crea interface del context
interface AuthContextProps {
  user: UserSession | null;
  setUser: (user: UserSession | null) => void;
  logout: () => void;
  //ORDERS
  orders: Order[];
  setOrders: (orders: Order[]) => void;
}

//creo el contexto, aca vamos a guardar los datos
export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  logout: () => {},
  //ORDERS
  orders:[],
  setOrders: () => {},
});

// Crear el provider

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserSession | null>(null);
  //ORDERS
  const [orders, setOrders] = useState<Order[]>([]);
  //SUCEDE EN EL LOGIN
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      
      //ORDERS

      setOrders(user?.user.orders || []);
    }
  }, [user]);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user")!);
    setUser(localUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, orders, setOrders }}>
      {children}
    </AuthContext.Provider>
  );
};
*/
"use client";

import { UserSession, Order } from "@/app/interfaces";
import { createContext, useEffect, useState } from "react";

// Interfaz del contexto
interface AuthContextProps {
  user: UserSession | null;
  setUser: (user: UserSession | null) => void;
  logout: () => void;
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  addOrder: (order: Order) => void;
  loading: boolean; // Añadido estado de carga
}

// Creación del contexto con valores iniciales
export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  logout: () => {},
  orders: [],
  setOrders: () => {},
  addOrder: () => {},
  loading: true, // Valor inicial de carga
});

// Proveedor del contexto
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserSession | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  // Actualiza el localStorage y las órdenes al iniciar sesión
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setOrders(user.user.orders || []);
    }
  }, [user]);

  // Carga el usuario desde localStorage al iniciar la app
  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      const parsedUser = JSON.parse(localUser);
      setUser(parsedUser);
      setOrders(parsedUser.user.orders || []);
    }
    setLoading(false); // Finaliza la carga después de verificar
  }, []);

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setOrders([]);
  };

  // Función para agregar una nueva orden
  const addOrder = (order: Order) => {
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);

    // Actualizar el usuario en el contexto con las nuevas órdenes
    if (user) {
      const updatedUser = {
        ...user,
        user: {
          ...user.user,
          orders: updatedOrders,
        },
      };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, orders, setOrders, addOrder, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
