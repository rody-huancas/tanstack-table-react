import React from "react";
import { SimpleTable } from "./components/SimpleTable";
import dayjs from "dayjs";
import data from "./MOCK_DATA.json";

const App = () => {
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "Mi ID",
    },
    {
      header: "Nombres y Apellidos",
      accessorFn: (row) => `${row.name} ${row.lastname}`,
    },
    // {
    //   header: "Nombres",
    //   accessorKey: "name",
    //   footer: "Mi Nombre",
    // },
    // {
    //   header: "Apellidos",
    //   accessorKey: "lastname",
    //   footer: "Mis Apellidos",
    // },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Mi Email",
    },
    {
      header: "Country",
      accessorKey: "country",
      footer: "Mi País",
    },
    {
      header: "Fecha de nacimiento",
      accessorKey: "dayOfBirth",
      footer: "Mi Fecha de nacimiento",
      cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    },
  ];

  return <SimpleTable data={data} columns={columns} />;
};

export default App;
