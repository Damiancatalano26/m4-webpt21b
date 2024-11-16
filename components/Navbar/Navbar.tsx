
"use client";
import { useState, useEffect } from "react";
import SearchBar from "../Buscador/SearchBar";
import Image from "next/image";
import UserWidget from "../UserWidget/UserWidget";

const Navbar = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Fetch de los productos desde el backend
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const data = await response.json();
        setProductos(data);
        console.log(data)
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-12">
            <a className="block text-teal-600 dark:text-teal-300" href="#">
              <span className="sr-only">Home</span>
              <Image
                src="https://www.yieldmaxetfs.com/wp-content/uploads/2023/07/apple-icon.png"
                alt="Icono de Apple"
                width={50}
                height={50}
              />
            </a>
          </div>
          
          {/* Navegación */}
          <nav aria-label="Global" className="hidden md:flex items-center gap-6">
            <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="/">Inicio</a>
            <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="/products">Productos</a>
            <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="/Favoritos">Favoritos</a>
            <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="/dashboard">Dashboard</a>
            <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="/cart">Carrito</a>
          </nav>

         {/*Buscador*/}
          <div className="hidden lg:flex items-center flex-1 mx-6">
            <SearchBar productos={productos} />
          </div>
          
          
          <div className="flex items-center gap-4">
            <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500" href="/login">
              Login
            </a>
            <a className="hidden sm:flex rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75" href="/register">
              Register
            </a>
            <div className="hidden md:flex items-center ml-4">
              <UserWidget />
            </div>
            <div className="md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
