
"use client"
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
        <img src={image} alt={name} />
        
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
