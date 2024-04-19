import React from "react";
import Image from "next/image";

interface Workshop {
  nombre: string;
  imagen: string;
  link: string;
}

const Tarjeta: React.FC<{ workshop: Workshop }> = ({ workshop }) => {
  return (
    <a href={workshop.link} target="_blank" rel="noopener noreferrer" className="max-w-xs rounded overflow-hidden shadow-lg m-4 cursor-pointer relative">
      <Image src={workshop.imagen} alt={workshop.nombre} width={300} height={200} />
      <div className="px-6 py-4 absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white">
        <div className="font-bold text-xl">{workshop.nombre}</div>
      </div>
    </a>
  );
};

const TarjetasList: React.FC = () => {
  // Definimos los talleres en una variable local
  const workshops: Workshop[] = [
    {
      nombre: "Brown Henna",
      imagen: "/workshop_images/browhenna.png",
      link: "https://api.whatsapp.com/send?phone=2975686942&text=¡Hola!%20Estoy%20muy%20interesad@%20en%20participar%20en%20el%20emocionante%20workshop%20de%20Brow%20Henna.%20Quisiera%20obtener%20más%20información%20sobre%20las%20fechas%20disponibles,%20los%20horarios%20y%20los%20contenidos%20del%20curso.%20¿Podrían%20por%20favor%20proporcionarme%20detalles%20adicionales?%20Agradezco%20mucho%20su%20atención%20y%20estoy%20ansios@%20por%20sumergirme%20en%20el%20mundo%20del%20Brow%20Henna.%20¡Espero%20con%20entusiasmo%20su%20respuesta!](https://api.whatsapp.com/send?phone=2975686942&text=¡Hola!%20Estoy%20muy%20interesad@%20en%20participar%20en%20el%20emocionante%20workshop%20de%20Brow%20Henna.%20Quisiera%20obtener%20más%20información%20sobre%20las%20fechas%20disponibles,%20los%20horarios%20y%20los%20contenidos%20del%20curso.%20¿Podrían%20por%20favor%20proporcionarme%20detalles%20adicionales?%20Agradezco%20mucho%20su%20atención%20y%20estoy%20ansios@%20por%20sumergirme%20en%20el%20mundo%20del%20Brow%20Henna.%20¡Espero%20con%20entusiasmo%20su%20respuesta!"
    },
    {
      nombre: "Brown Lamination",
      imagen: "/workshop_images/browlamination.png",
      link: "https://api.whatsapp.com/send?phone=2975686942&text=¡Hola!%20Estoy%20muy%20interesad@%20en%20participar%20en%20el%20emocionante%20workshop%20de%20Brown%20Lamination.%20Quisiera%20obtener%20más%20información%20sobre%20las%20fechas%20disponibles,%20los%20horarios%20y%20los%20contenidos%20del%20curso.%20¿Podrían%20por%20favor%20proporcionarme%20detalles%20adicionales?%20Agradezco%20mucho%20su%20atención%20y%20estoy%20ansios@%20por%20sumergirme%20en%20el%20mundo%20del%20Brown%20Lamination.%20¡Espero%20con%20entusiasmo%20su%20respuesta!](https://api.whatsapp.com/send?phone=2975686942&text=¡Hola!%20Estoy%20muy%20interesad@%20en%20participar%20en%20el%20emocionante%20workshop%20de%20Brown%20Lamination.%20Quisiera%20obtener%20más%20información%20sobre%20las%20fechas%20disponibles,%20los%20horarios%20y%20los%20contenidos%20del%20curso.%20¿Podrían%20por%20favor%20proporcionarme%20detalles%20adicionales?%20Agradezco%20mucho%20su%20atención%20y%20estoy%20ansios@%20por%20sumergirme%20en%20el%20mundo%20del%20Brown%20Lamination.%20¡Espero%20con%20entusiasmo%20su%20respuesta!"
    },
    // Agrega más talleres si es necesario
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {workshops.map((workshop, index) => (
        <Tarjeta key={index} workshop={workshop} />
      ))}
    </div>
  );
};

export default TarjetasList;
