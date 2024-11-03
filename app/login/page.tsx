import Image from 'next/image';
import LoginForm from "../../components/Login/LoginForm";

const Page = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      {/* Parte izquierda con texto y formulario */}
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">¡Empieza hoy!</h1>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error
            neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        {/* Renderización del componente dinámico */}
        <LoginForm />
      </div>

      {/* Parte derecha con la imagen */}
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <Image
          alt="Imagen decorativa"
          src="https://i.pinimg.com/736x/60/1b/f8/601bf865cad153c1914fe75271b4b5d0.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Page;




       
    
   