"use client";

import { useEffect, useState } from 'react';
import { Product } from "@/app/interfaces";
import Card from "@/components/Card/Card";
import AuthProtected from "@/components/AuthProtected/AuthProtected";
import { Toaster, toast } from 'sonner';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState<Product[]>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(storedFavorites);

        
        if (storedFavorites.length === 0) {
            toast.error("No tienes productos en favoritos.");
        }
    }, []);

    return (
        <AuthProtected>
            {/* Componente Toaster para mostrar los mensajes de toast */}
            <Toaster position="top-center" richColors />
            
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-6">Mis Favoritos</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favorites.length > 0 ? (
                        favorites.map((product) => (
                            <Card key={product.id} {...product} />
                        ))
                    ) : (
                        <p>No tienes productos en favoritos.</p>
                    )}
                </div>
            </div>
        </AuthProtected>
    );
};

export default FavoritesPage;
