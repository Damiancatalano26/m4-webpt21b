
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
import { useContext } from "react";

const CartDetail = () => {
  const { user, addOrder } = useContext(AuthContext); // Usamos `addOrder` en lugar de `setOrders`
  const { cart, emptyCart } = useContext(CartContext);

  const handleBuy = async () => {
    try {
      const res = await postOrders(user?.user.id || 0, user?.token || "", cart);
      if (res.status === "approved") {
        // Llamamos a `addOrder` para agregar la orden y actualizar el contexto `user`
        addOrder({ id: parseInt(res.id), status: "approved", date: new Date().toISOString() });
        alert(`Orden ${res.id} creada exitosamente`);
        emptyCart();
      } else {
        alert("Error en la compra: " + res);
      }
    } catch (error) {
      alert("Hubo un error en la compra. Inténtalo de nuevo.");
      console.error(error);
    }
  };

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
