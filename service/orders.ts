import { Cart } from "@/contexts/cartContext"
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const postOrders = async (userId: number,token:string, cart:Cart[]) => {
    const data = {userId, products:cart.map((item) => item.id)}
    console.log(process.env)
    console.log("API URL:", apiUrl); // Debe mostrar la URL completa, como https://5666-190-120-246-4.ngrok-free.app

    const res = await fetch(`${apiUrl}/orders`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json",
           Authorization: token,
        }
     })
     return await res.json()
}