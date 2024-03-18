'use client'
import React, { useState } from "react";
import { Input, BtnBoton, Label } from ".";

export interface regWorkshop {
  nombre: string;
  apellido: string;
  dni: number;
  fecha_wp: string;
  workshop: string;
  instructor: string;

}

const FormularioWorkshop = () => {
  const [formData, setFormData] = useState<regWorkshop>({
    nombre: "",
    apellido: "",
    dni: 0,
    fecha_wp: "",
    workshop: "",
    instructor: "",

  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Enviar datos del formulario a la API
    const res = await fetch(  `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/workshops/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
   
    });
 // Imprimir el estado de la respuesta en la consola del navegador
 console.log("Estado de la respuesta:", res);
 console.log("datos:", formData);
    // Manejar la respuesta de la API
    if (res.ok) {
      // Mostrar mensaje de éxito
      alert("Formulario enviado correctamente");
    } else {
      // Mostrar mensaje de error
      alert("Error al enviar el formulario");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, });
  };

  return (
    <form onSubmit={handleSubmit}>
     

      <Label>Nombre</Label>

      <Input
     type="text"
     id="nombre"
     name="nombre"
     value={formData.nombre}
     onChange={handleChange}
     placeholder="Maria"
      />
     

      <Label>Apellido</Label>

      <Input
      type="text"
      id="apellido"
      name="apellido"
      value={formData.apellido}
      onChange={handleChange}
      placeholder="Doe"
      />
     

      <Label>Documento de ID.</Label>

      <Input
      type="text"
      id="dni"
      name="dni"
      value={formData.dni}
      onChange={handleChange}
      
      />
     

      <Label>Fecha de Workshop</Label>

      <Input
      type="date"
      id="fecha_wp"
      name="fecha_wp"
      value={formData.fecha_wp}
      onChange={handleChange}
      />
     

      <Label>Workshop</Label>

      <Input
      type="text"
      id="workshop"
      name="workshop"
      value={formData.workshop}
      onChange={handleChange}
      placeholder="Brown Lamination"
      />
     

      <Label>Instructor</Label>

      <Input
      type="text"
      id="instructor"
      name="instructor"
      value={formData.instructor}
      onChange={handleChange}
      placeholder="Duneisy Blanco"
      />
     

     


<BtnBoton>Registrar</BtnBoton>
    </form>
  );
};

export default FormularioWorkshop;

