"use client";

import React, { useEffect, useState } from "react";
import DataTable, {
  TableColumn,
  createTheme,
} from "react-data-table-component";
import { regWorkshop } from "../interfacesTypesData";

//tema personalizado:
createTheme(
  "rosa",
  {
    text: {
      primary: "#ffc0cb", // Light pink for primary text
      secondary: "#f8bbed", // Lighter pink for secondary text
    },
    background: {
      default: "#A6708D", // Light gray background
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#F9A8D4",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

//************************************ */
type DataRow = regWorkshop;
const columns: TableColumn<DataRow>[] = [
  {
    name: "Nombre",
    selector: (row) => row.nombre + " " + row.apellido,
    sortable: true,

    reorder: true,
    
  },

  {
    name: "Documento",
    selector: (row) => row.dni,
    hide: 'sm',
  },


  {
    name: "Instructor",
    selector: (row) => row.instructor,
    hide: 'sm',
  },
  {
    name: "Workshop",
    selector: (row) => row.workshop,
    sortable: true,
    reorder: true,
  },
  {
    name: "Certificado",
    selector: (row) => row.codigo,
  },
  {
    name: "Fecha",
    selector: (row) => row.fecha_wp,
    sortable: true,
    reorder: true,
  },
];

const DataTabla = () => {
  // configurar los hooks
  const [workshops, setWorkshops] = useState([]);

  // funcion para mostrar los datos con fetch
  const showData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/workshops/`
    );
    const data = await res.json();

    setWorkshops(data);
  };

  useEffect(() => {
    showData();
  }, []);
  //configurarmos las colums para datatable

  // mostramos los datos en la tabla

  console.log(workshops);

  return (
    <div className="py-10 px-2 md:px-20 lg:px-25 2xl:px-60 ">
      {" "}
      <h1 className="text-center text-2xl text-black text-">Tabla de Registros</h1>
      <DataTable columns={columns} data={workshops} pagination theme="rosa" fixedHeader dense/>
    </div>
  );
};

export default DataTabla;
