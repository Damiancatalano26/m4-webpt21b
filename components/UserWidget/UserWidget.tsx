"use client";

import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

const UserWidget = () => {
    const { user, logout } = useContext(AuthContext);
    const isLoggedIn = user?.login;

    const handleToggle = () => {
        if (isLoggedIn) {
            logout(); // Si está conectado, llama a logout
        } else {
            // Aquí podrías definir la lógica para iniciar sesión
            console.log("Conectar al usuario");
        }
    };

    return (
        <label className="relative inline-flex cursor-pointer items-center">
            {/* Checkbox para alternar entre conectado y desconectado */}
            <input 
                type="checkbox" 
                className="peer sr-only" 
                checked={isLoggedIn} 
                onChange={handleToggle} 
            />
            
            {/* Fondo de la palanca */}
            <div
                className={`border-gray-500 shadow-lg ${isLoggedIn ? "shadow-green-600 bg-green-600 pl-2" : "shadow-red-600 bg-red-600 pl-7"} 
                    border flex h-6 w-12 items-center outline-none rounded transition-all duration-300`}
            ></div>
            
            {/* SVG de icono "desconectado" */}
            <svg
                className={`absolute left-6 w-5 h-5 stroke-gray-900 transition-all duration-500 ${isLoggedIn ? "opacity-0" : "opacity-100"}`}
                viewBox="0 0 100 100"
            >
                <path
                    d="M50,18A19.9,19.9,0,0,0,30,38v8a8,8,0,0,0-8,8V74a8,8,0,0,0,8,8H70a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H38V38a12,12,0,0,1,23.6-3,4,4,0,1,0,7.8-2A20.1,20.1,0,0,0,50,18Z"
                    fill="currentColor"
                />
            </svg>

            {/* SVG de icono "conectado" */}
            <svg
                className={`absolute left-1 w-5 h-5 stroke-gray-900 transition-all duration-500 ${isLoggedIn ? "opacity-100" : "opacity-0"}`}
                viewBox="0 0 100 100"
            >
                <path
                    d="M30,46V38a20,20,0,0,1,40,0v8a8,8,0,0,1,8,8V74a8,8,0,0,1-8,8H30a8,8,0,0,1-8-8V54A8,8,0,0,1,30,46Zm32-8v8H38V38a12,12,0,0,1,24,0Z"
                    fillRule="evenodd"
                />
            </svg>

            {/* Indicador deslizante */}
            <div
                className={`absolute top-1 h-3.5 w-4 rounded-sm bg-white shadow-lg transition-all duration-300 ${isLoggedIn ? "left-7" : "left-1"}`}
            ></div>
        </label>
    );
};

export default UserWidget;

