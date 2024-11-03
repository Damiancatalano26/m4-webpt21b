import { UserData, UserLogin } from "@/app/interfaces"

const appiUrl = process.env.APPI_URL || "http://localhost:3001"


export const register = async (data: UserData) => {
 const res = await fetch(`${appiUrl}/users/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'Content-Type': "application/json"
    }
 })
 return await res.json()
}

export const login = async (data: UserLogin) => {
    const res = await fetch(`${appiUrl}/users/login`, {
       method: "POST",
       body: JSON.stringify(data),
       headers: {
           'Content-Type': "application/json"
       }
    })
    return await res.json()
   }