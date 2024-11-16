"use client";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-7xl font-extrabold text-teal-600">404</h1>
      <p className="text-xl mt-4 text-gray-700">
        No encontramos lo que buscabas, pero encontraste esta página misteriosa 🔍
      </p>
      <div className="mt-10">
        <Link href="/">
          <span className="px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-md hover:bg-teal-700 cursor-pointer transition">
            Volver al Inicio
          </span>
        </Link>
      </div>
      <div className="flex mt-6 gap-2 animate-bounce">
        <span>🎉</span>
        <span>🚀</span>
        <span>🌎</span>
        <span>👽</span>
      </div>
    </div>
  );
};

export default NotFound;
