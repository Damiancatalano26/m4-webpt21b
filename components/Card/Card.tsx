/*import { Product } from "@/app/interfaces";
import Link from "next/link";
import Image from 'next/image';


interface CardProps extends Product {
    variant?: "primery" | "secondary"
}

const Card = ({name, image, price, id}: CardProps) =>{
    return (
        <Link href={`/products/${id}`}>
        <article className="bg-gray-200 rounded-2xl border-2 border-double border-stone-300 text-center transition-ease-in-out delay-150 hover:scale-105 py-8">
            <h3>{name}</h3>
            <Image width={300} height={300} src={image} alt={name} />
            <p>{price}</p>
        </article>
        </Link>
    )
}

export default Card
*/
"use client"
import { Product } from "@/app/interfaces";
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface CardProps extends Product {
    variant?: "primary" | "secondary";
}

const Card = ({ name, image, price, id }: CardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Verifica si el producto está en favoritos al cargar el componente
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorite(favorites.some((product: Product) => product.id === id));
    }, [id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        let updatedFavorites;

        if (isFavorite) {
            // Si el producto ya es favorito, lo elimina
            updatedFavorites = favorites.filter((product: Product) => product.id !== id);
        } else {
            // Si no es favorito, lo añade
            updatedFavorites = [...favorites, { id, name, image, price }];
        }

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);
    };

    return (
        <article className="relative bg-white rounded-lg shadow-lg border border-gray-200 p-5 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite();
                }}
                className="absolute top-4 right-4 text-2xl text-red-500 transition-transform duration-200 transform hover:scale-110 focus:outline-none"
                aria-label="Añadir a favoritos"
            >
                {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>

            <Link href={`/products/${id}`}>
                <div className="cursor-pointer">
                    <div className="overflow-hidden rounded-lg w-full h-60 mb-4 flex items-center justify-center bg-gray-100">
                        <Image
                            src={image}
                            alt={name}
                            width={300}
                            height={300}
                            className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{name}</h3>
                    <div className="w-12 h-1 bg-blue-500 rounded-full mt-2 mb-4 mx-auto"></div>
                    <p className="text-xl font-bold text-gray-800 mt-2">US${price}</p>
                </div>
            </Link>
        </article>
    );
};

export default Card;
