import { Cell, flexRender, Row, Table } from "@tanstack/react-table";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { User } from "@/types/user";

export const TableBodyComponent = ({ table }: { table: Table<User> }) => (
  <TableBody>
    {table.getRowModel().rows.map((row: Row<User>) => (
      <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
        {row.getVisibleCells().map((cell: Cell<User, unknown>) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
);
