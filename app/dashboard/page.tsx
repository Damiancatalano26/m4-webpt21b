/*"use client";

import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";


const Page = () => {
  // Accedí a 'user' de manera segura con un valor predeterminado para evitar errores si el contexto es indefinido.
  const context = useContext(AuthContext);
  const user = context.user?.user;
  const orders = context.orders;
 

  return (
    <div>
      <h1>Dashboard</h1>

      <h3>{user?.name || "No name available"}</h3>

      <h4>{user?.email || "No email available"}</h4>

      <h5>Phone Number: {user?.phone || "No phone available"}</h5>

      <h6>Address: {user?.address || "No address available"}</h6>

      {orders.length && orders.length > 0 ? (
        orders.map((order, i) => (
          // Se usó 'order.id' como clave primaria para mayor seguridad, con 'i' como respaldo.
          <div key={order.id || i}>
            <p>Orden ID: {order.id}</p>
          </div>
        ))
      ) : (
        <p>No tienes órdenes!</p>
      )}
    </div>
  );
};

export default Page;
*/

"use client";

import AuthProtected from "@/components/AuthProtected/AuthProtected";
import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";

const Page = () => {
  const { user, orders } = useContext(AuthContext);
  const userData = user?.user;

  return (
    <AuthProtected>
      <div>
        <h1>Dashboard</h1>

        <h3>{userData?.name || "No name available"}</h3>
        <h4>{userData?.email || "No email available"}</h4>
        <h5>Phone Number: {userData?.phone || "No phone available"}</h5>
        <h6>Address: {userData?.address || "No address available"}</h6>

        {orders.length > 0 ? (
          orders.map((order, i) => (
            <div key={order.id || i}>
              <p>Orden ID: {order.id}</p>
            </div>
          ))
        ) : (
          <p>No tienes órdenes!</p>
        )}
      </div>
    </AuthProtected>
  );
};

export default Page;
