import { Product } from "@/app/interfaces";
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