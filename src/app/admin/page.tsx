import { NextPage } from "next";

const AdminLogin: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="w-full max-w-md p-8 bg-[#ffc4e5] rounded-md shadow-lg">
        <h1 className="text-2xl text-center text-white font-bold mb-6">Iniciar sesión</h1>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button className="w-full p-3 bg-[#f360b3]  text-white rounded-md shadow-md hover:bg-[#ff42b0] ">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
