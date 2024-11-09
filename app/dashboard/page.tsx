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
      <div className="min-h-screen bg-gray-50 py-10 px-6 text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">Dashboard</h1>

        <div className="max-w-lg mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-1">
              {userData?.name || "No hay nombre disponible"}
            </h3>
            <h4 className="text-gray-600">{userData?.email || "No hay correo electrónico disponible"}</h4>
            <h5 className="text-gray-600 mt-4">Número de teléfono: {userData?.phone || "No hay teléfono disponible"}</h5>
            <h6 className="text-gray-600 mt-1">Dirección: {userData?.address || "No hay dirección disponible"}</h6>
          </div>

          {orders.length > 0 ? (
            <div className="space-y-4">
              {orders.map((order, i) => (
                <div
                  key={order.id || i}
                  className="bg-white rounded-lg shadow-md p-4 text-gray-700"
                >
                  <p className="text-lg font-semibold">Orden ID: {order.id}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 mt-6">No tienes órdenes!</p>
          )}
        </div>
      </div>
    </AuthProtected>
  );
};

export default Page;
