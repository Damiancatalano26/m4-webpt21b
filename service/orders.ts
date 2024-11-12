import { Cart } from "@/contexts/cartContext";
const appiUrl = process.env.API_URL || "http://localhost:3001";

export const postOrders = async (
  userId: number,
  token: string,
  cart: Cart[]
) => {
  try {
    const data = { userId, products: cart.map((item) => item.id) };
    const res = await fetch(`${appiUrl}/orders`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!res.ok) {
      console.error("Error en la solicitud:", res.status, res.statusText);
      console.log("Respuesta completa:", await res.text());
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Hubo un error en postOrders:", error);
    throw error;
  }
};
