
/*"use client";
import { AuthContext } from "@/contexts/authContext";
import { CartContext } from "@/contexts/cartContext";
import { postOrders } from "@/service/orders";
import { useContext } from "react";

const CartDetail = () => {
  const { user, orders, setOrders } = useContext(AuthContext);

  const { cart, emptyCart } = useContext(CartContext);

  const handleBuy = async () => {
    await postOrders(user?.user.id || 0, user?.token || "", cart).then((res) => {
      if(res.status === "approved") {
        //ORDERS
        setOrders([...orders, {id: parseInt(res.id)}]);
        alert(res.id);
        emptyCart();
      } else {
        alert(res)
      }
    })
  }
    
  return (
    <div>
      {cart?.length === 0 ? (
        <h2>¡El carrito está vacío!</h2>
      ) : (
        cart?.map((item, i) => (
          <div key={i}>
           <span className="font-bold">{item.name}</span>
           <span className="text-xs">{` (US${item.price})`}</span>
          </div>
        ))
      
      )}
      <button onClick={handleBuy}>Comprar</button>
    </div>
  );
};

export default CartDetail;
*/
"use client";
import { AuthContext } from "@/contexts/authContext";
import { CartContext } from "@/contexts/cartContext";
import { postOrders } from "@/service/orders";
import { useContext, useState } from "react";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

const CartDetail = () => {
  const { user, addOrder } = useContext(AuthContext);
  const { cart, emptyCart } = useContext(CartContext);
  const router = useRouter();
  const [isBought, setIsBought] = useState(false); // Estado para saber si la compra se realizó

  const handleBuy = async () => {
    try {
      const res = await postOrders(user?.user.id || 0, user?.token || "", cart);
      if (res.status === "approved") {
        addOrder({ id: parseInt(res.id), status: "approved", date: new Date().toISOString() });
        toast.success(`Orden ${res.id} creada exitosamente`);
        emptyCart();
        setIsBought(true); // Cambia el botón a "Dashboard"
      } else {
        toast.error("Error en la compra: " + res);
      }
    } catch (error) {
      toast.error("Hubo un error en la compra. Inténtalo de nuevo.");
      console.error(error);
    }
  };

  const handleDashboardRedirect = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Toaster for notifications */}
      <Toaster position="top-center" richColors />
      
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Carrito de Compras</h2>

        {/* Cart Items */}
        {cart?.length === 0 ? (
          <h3 className="text-xl text-gray-500">¡El carrito está vacío!</h3>
        ) : (
          <div className="space-y-4">
            {cart?.map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-lg text-gray-800">{item.name}</span>
                  <span className="text-sm text-gray-600">{`(US$${item.price})`}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Buy or Dashboard Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={isBought ? handleDashboardRedirect : handleBuy} // Cambia la función según el estado
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            {isBought ? "Ir al Dashboard" : "Comprar"} {/* Cambia el texto del botón */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
