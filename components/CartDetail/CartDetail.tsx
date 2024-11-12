"use client";
import { AuthContext } from "@/contexts/authContext";
import { CartContext } from "@/contexts/cartContext";
import { postOrders } from "@/service/orders";
import { useContext, useState } from "react";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

const CartDetail = () => {
  const { user, addOrder } = useContext(AuthContext);
  const { cart, emptyCart, removeFromCart } = useContext(CartContext); // removeFromCart para eliminar items
  const router = useRouter();
  const [isBought, setIsBought] = useState(false);

  const handleBuy = async () => {
    try {
      console.log("User ID:", user?.user.id);
      console.log("Token:", user?.token);
      console.log("Cart:", cart);

      const res = await postOrders(user?.user.id || 0, user?.token || "", cart);

      if (res.status === "approved") {
        addOrder({
          id: parseInt(res.id),
          status: "approved",
          date: new Date().toISOString(),
        });
        toast.success(`Orden ${res.id} creada exitosamente`);
        emptyCart();
        setIsBought(true);
      } else {
        toast.error("Error en la compra: " + res);
        console.log("Respuesta del servidor:", res); // Agregar para más detalles
      }
    } catch (error) {
      toast.error("Hubo un error en la compra. Inténtalo de nuevo.");
      console.error("Error en postOrders:", error);
    }
  };

  const handleDashboardRedirect = () => {
    router.push("/dashboard");
  };

  // Nueva función para eliminar un ítem del carrito
  const handleRemoveItem = (itemIndex: number) => {
    removeFromCart(itemIndex);
    toast.success("Producto eliminado del carrito");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" richColors />

      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Carrito de Compras
        </h2>

        {cart?.length === 0 ? (
          <h3 className="text-xl text-gray-500">¡El carrito está vacío!</h3>
        ) : (
          <div className="space-y-4">
            {cart?.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-4 mb-4"
              >
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </span>
                  <span className="text-sm text-gray-600">{`(US$${item.price})`}</span>
                </div>

                <button
                  onClick={() => handleRemoveItem(i)}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <button
            onClick={isBought ? handleDashboardRedirect : handleBuy}
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            {isBought ? "Ir al Dashboard" : "Comprar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
