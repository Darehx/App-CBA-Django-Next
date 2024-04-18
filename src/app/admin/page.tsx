
'use client'
import { NextPage } from "next";
import { getToken } from "next-auth/jwt";
import { useRouter } from "next/router";
import { useState } from "react";


const AdminLogin: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
     
      if (response.status === 200) {
        // Successful login
        console.log("Login successful!", data);
      
        router.push("/admin/registros");  
      } else {
        setError(data.error || "Login failed"); // Handle login error
      }
    } catch (error) {
      console.error("Error:", error);

    } finally {
      setIsLoading(false); // Always set loading state to false
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-[#ffc4e5] rounded-md shadow-lg">
        <h1 className="text-2xl text-center text-white font-bold mb-6">Iniciar sesión</h1>
        <input
          name="username"
          type="text"
          placeholder="Correo electrónico"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <button className="w-full p-3 bg-[#f360b3] text-white rounded-md shadow-md hover:bg-[#ff42b0]">
            Iniciar sesión
          </button>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
