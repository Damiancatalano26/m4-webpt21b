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
import { Product } from "@/app/interfaces";
import Link from "next/link";
import Image from 'next/image';

interface CardProps extends Product {
    variant?: "primary" | "secondary";
}

const Card = ({ name, image, price, id }: CardProps) => {
    return (
        <Link href={`/products/${id}`}>
            <article className="bg-gray-200 rounded-2xl border-2 border-double border-stone-300 text-center transition ease-in-out delay-150 hover:scale-105 p-4">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <div className="flex justify-center items-center overflow-hidden rounded-lg w-full h-60">
                    <Image
                        src={image}
                        alt={name}
                        width={300}
                        height={300}
                        className="object-contain h-full w-full"
                    />
                </div>
                <p className="mt-4 text-lg font-medium text-gray-700">${price}</p>
            </article>
        </Link>
    );
};

export default Card;
