import Link from "next/link";


const Hero = () => {
    return <header className="h-48 flex items-center justify-center flex-col bg-blue-500 rounded-2xl drop-shadow-xl mx-4 my-3">
        <h1>Welcome to my page!</h1>
        <Link href="/products">Go to products</Link>
        </header>
};
export default Hero;