"use client"; // Indica que este componente es de cliente

import { useState, useEffect } from 'react';
import Link from "next/link";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://www.igeeksblog.com/wp-content/uploads/2023/04/Official-Apple-Store-opening-wallpapers-for-iPhone-1.jpg",
        "https://c4.wallpaperflare.com/wallpaper/924/603/750/apple-mac-macintosh-logo-wallpaper-preview.jpg",  
        "https://images6.alphacoders.com/133/1338694.png",   
        "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/9/24/iphone-16-pro-max-2-10612.jpg?width=0&s=GaEqIOAvUqeGZD6NuEnMCQ",   
        "https://memeburn.com/gearburn/wp-content/uploads/sites/3/2019/09/apple-watch-series-5.jpg"
    ]; 

    const altTexts = [
        "Apple Store",
        "Apple wallpaper",
        "Apple Watch",
        "Apple iphone16",
        "Apple AirPods"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia de imagen cada 3 segundos

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <header className="relative w-full h-56 md:h-96 overflow-hidden rounded-lg mx-4 my-3">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={altTexts[index]}
                    className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                />
            ))}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
                    />
                ))}
            </div>
            <Link href="/products" className="absolute bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-lg">
                Go to products
            </Link>
        </header>
    );
};

export default Hero;
