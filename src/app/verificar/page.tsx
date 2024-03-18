'use client'
import { useState } from 'react';

import { regWorkshop } from '@/components/interfacesTypesData';
import { BtnBoton, Input, Label } from '@/components/UI';

export default function VerificarCertificado() {
  const [codigo, setCodigo] = useState<string>('');
  const [workshopData, setWorkshopData] = useState<regWorkshop | null>(null);
  const [error, setError] = useState<string>('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/workshops/code=${codigo}`);
      if (!response.ok) {
        throw new Error('Workshop not found');
      }
      const data: regWorkshop = await response.json();
      setWorkshopData(data);
      setError('');
    } catch (error) {
  
      setWorkshopData(null);
    }
  };

  return (
    <div>
      <Label>Certificado</Label>  
      <Input
      type="text"
      placeholder="Codigo Certificado"
      value={codigo}
      onChange={(e) => setCodigo(e.target.value)}
      />
  
    
      <button onClick={handleSearch}
      className="flex w-full justify-center rounded-md bg-rose-500 px-3 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</button>
      {error && <p>{error}</p>}
      {workshopData && (
       <div className="table w-full bg-rose-400 px-5 py-5 ">
       <div className="table-row-group">
         <div className="table-row">
           <div className="table-cell">Nombre:</div>
           <div className="table-cell">{workshopData.nombre}</div>
         </div>
         <div className="table-row">
           <div className="table-cell">Apellido:</div>
           <div className="table-cell">{workshopData.apellido}</div>
         </div>
         <div className="table-row">
           <div className="table-cell">DNI:</div>
           <div className="table-cell">{workshopData.dni}</div>
         </div>
         <div className="table-row">
           <div className="table-cell">Fecha:</div>
           <div className="table-cell">{workshopData.fecha_wp}</div>
         </div>
         <div className="table-row">
           <div className="table-cell">Workshop:</div>
           <div className="table-cell">{workshopData.workshop}</div>
         </div>
         <div className="table-row">
           <div className="table-cell">Instructor:</div>
           <div className="table-cell">{workshopData.instructor}</div>
         </div>
         <div className="table-row">
           <div className="table-cell">Certificado:</div>
           <div className="table-cell">{workshopData.codigo}</div>
         </div>
         <div className="table-row">
           <div className="table-cell">Estatus</div>
           <div className="table-cell text-s">Valido para {workshopData.nombre + ' ' + workshopData.apellido}</div>
         </div>
       </div>
     </div>
     
      )}
    </div>
  );
}
