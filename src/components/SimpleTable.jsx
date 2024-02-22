import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import data from "../MOCK_DATA.json";

export const SimpleTable = () => {
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "Mi ID"
    },
    {
      header: "Nombres",
      accessorKey: "name",
      footer: "Mi Nombre"
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Mi Email"
    },
    {
      header: "Country",
      accessorKey: "country",
      footer: "Mi País"
    },
    {
      header: "Fecha de nacimiento",
      accessorKey: "dayOfBirth",
      footer: "Mi Fecha de nacimiento"
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div>
                      { flexRender( header.column.columnDef.header, header.getContext() )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
            {
                table.getFooterGroups().map( footerGroup => (
                    <tr key={footerGroup.id}>
                        {
                            footerGroup.headers.map( footer => (
                                <th key={footer.id}>
                                    {
                                        flexRender(footer.column.columnDef.footer, footer.getContext())
                                    }
                                </th>
                            ) )
                        }
                    </tr>
                ) )
            }
        </tfoot>
      </table>
    </div>
  );
};
