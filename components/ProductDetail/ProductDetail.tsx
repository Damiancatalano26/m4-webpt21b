/*
"use client"
import Image from 'next/image';
import { Product } from "@/app/interfaces";
import style from "./ProductDetail.module.css"
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { CartContext } from "@/contexts/cartContext";


interface ProductDetailProps {

  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const {user} = useContext (AuthContext)
  const {cart, setCart} = useContext(CartContext)
  const router = useRouter()
const {id, name, price, image, description} = product;
const isOnCart = cart.map((item) => item.id).includes(product.id)



const handleAddToCart = () => {
  if (user?.login){
    setCart([...cart, {id, name, price}])
alert("Agregado")
  } else {
    alert ("Por favor, inicie sesión para añadirlo al carrito")
    setTimeout(() =>{
      router.push("/login")

    }, 1000);
  }
}





  return (
    <article >
      <h1>{name}</h1>
      <div className={style.productDetail}>
        <Image src={image} alt={name} />
        
        <div className={style.info}>
        <p>{description}</p>
        <div className={style.widget}>
            <button onClick={
              isOnCart ? () => router.push("/cart") : ()=> handleAddToCart()
              }
              >
              {isOnCart ? "Ir al carrito" : "Agregar al carrito"}
            </button>
        <p>{price}</p>
        </div>
        </div>
      </div>
    </article>
  );
};
export default ProductDetail;
*/
"use client";
import Image from "next/image";
import { Product } from "@/app/interfaces";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { CartContext } from "@/contexts/cartContext";
import { Toaster, toast } from "sonner";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const { user } = useContext(AuthContext);
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();
  const { id, name, price, image, description } = product;
  const isOnCart = cart.map((item) => item.id).includes(product.id);

  const handleAddToCart = () => {
    if (user?.login) {
      setCart([...cart, { id, name, price }]);
      toast.success("Producto agregado al carrito");
    } else {
      toast.error("Por favor, inicie sesión para añadir al carrito");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }
  };

  return (
    <article className="max-w-3xl mx-auto my-10 bg-white p-6 rounded-xl shadow-xl">
      {/* Componente Toaster para mostrar los mensajes de Sonner */}
      <Toaster position="top-center" richColors />
      
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">{name}</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Imagen del producto */}
        <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="object-contain w-full h-auto rounded-lg"
          />
        </div>

        {/* Información del producto */}
        <div className="flex flex-col justify-between gap-4 w-full md:w-1/2">
          <p className="text-lg text-gray-700">{description}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">{`US$${price}`}</span>
            
            <div className="space-x-4">
              <button
                onClick={isOnCart ? () => router.push("/cart") : () => handleAddToCart()}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                {isOnCart ? "Ir al carrito" : "Agregar al carrito"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductDetail;
