import { Cart } from "@/contexts/cartContext"
const appiUrl = process.env.API_URL || "http://localhost:3001";

export const postOrders = async (userId: number,token:string, cart:Cart[]) => {
    const data = {userId, products:cart.map((item) => item.id)}
    const res = await fetch(`${appiUrl}/orders`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json",
           Authorization: token,
        }
     })
     return await res.json()
}