/*import Image from 'next/image';
import RegisterForm from "../../components/Register/Register";

const Page = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">¡Regístrate ahora!</h1>
          <p className="mt-4 text-gray-500">
            Únete a nuestra comunidad y disfruta de beneficios exclusivos. Completa el
            formulario para comenzar.
          </p>
        </div>

        
        <RegisterForm />
      </div>

    
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <Image
          alt="Imagen decorativa de registro"
          src="https://talktowalle.com/wp-content/uploads/2024/02/A-futuristic-Apple-Teleport-Machine-Apple-products-Apple-Teleport-Machine-blending-Apples-sci-fi.webp"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Page;
*/
import Image from 'next/image';
import RegisterForm from "../../components/Register/Register";

const Page = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      {/* Parte izquierda con texto y formulario */}
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">¡Regístrate ahora!</h1>
          <p className="mt-4 text-gray-500">
            Únete a nuestra comunidad y disfruta de beneficios exclusivos. Completa el
            formulario para comenzar.
          </p>
        </div>

        {/* Renderización del componente RegisterForm */}
        <RegisterForm />
      </div>

      {/* Parte derecha con la imagen */}
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <Image
          alt="Imagen decorativa de registro"
          src="https://talktowalle.com/wp-content/uploads/2024/02/A-futuristic-Apple-Teleport-Machine-Apple-products-Apple-Teleport-Machine-blending-Apples-sci-fi.webp"
          width={1200} // Puedes ajustar este valor
          height={800} // Puedes ajustar este valor
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Page;
