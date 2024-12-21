import { flexRender, HeaderGroup, Table } from "@tanstack/react-table";
import { TableHead, TableRow, TableHeader } from "../ui/table";
import { User } from "@/types/user";

export const TableHeaderUI = ({ table }: { table: Table<User> }) => (
  <TableHeader>
    {table.getHeaderGroups().map((headerGroup: HeaderGroup<User>) => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <TableHead key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        ))}
      </TableRow>
    ))}
  </TableHeader>
);
