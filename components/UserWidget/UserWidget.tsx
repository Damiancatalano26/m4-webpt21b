"use client";

import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

const UserWidget = () => {
    const { user, logout } = useContext(AuthContext);
    const isLoggedIn = user?.login;

    const handleLogout = () => {
        logout();
    };

    return (
        <div
            className={`fixed right-6 top-4 px-4 py-1.5 rounded-full font-semibold text-xs flex items-center gap-2
                shadow-lg border border-transparent hover:border-pink-400 transition-all duration-300
                ${isLoggedIn ? "bg-gradient-to-r from-indigo-500 to-purple-700 text-white" : "bg-gradient-to-r from-red-600 to-pink-500 text-white"}
                ${isLoggedIn ? "animate-pulse" : "animate-bounce"}`}
            style={{
                fontFamily: "Arial, sans-serif",
                letterSpacing: "0.05em",
                display: 'flex',
                alignItems: 'center', // Alinear verticalmente al centro
            }}
        >
            <div
                className={`relative w-5 h-5 rounded-full flex items-center justify-center
                    ${isLoggedIn ? "bg-blue-500" : "bg-yellow-500"}`}
                style={{
                    animation: isLoggedIn ? "spin 3s linear infinite" : "spin 1.5s linear infinite reverse",
                }}
            >
                {/* Ícono SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                </svg>
                <div
                    className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full
                        ${isLoggedIn ? "bg-blue-300 animate-ping" : "bg-yellow-300 animate-ping"}`}
                ></div>
            </div>
            <span className="font-extrabold tracking-wide">
                {isLoggedIn ? "Conectado" : "Desconectado"}
            </span>
            {isLoggedIn && (
                <button 
                    onClick={handleLogout} 
                    className="flex items-center justify-center w-8 h-8 text-white hover:text-gray-300 transition ml-2"
                    style={{ marginTop: '0', display: 'flex', alignItems: 'center' }} // Alinear verticalmente al centro
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15 12l4 4-1.41 1.41L12 12l6.59-6.59L19 8l-4 4zm-3 4H3v-2h9v2zm0-8H3V6h9v2z" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default UserWidget;
