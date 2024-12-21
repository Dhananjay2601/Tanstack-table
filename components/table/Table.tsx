/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { User } from "@/types/user";
import {
  SortingState,
  ColumnFiltersState,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { TableFilters } from "./TableFilters";
import { TableHeaderUI } from "./TableHeader";
import { TableBodyComponent } from "./TableBodyComponent";
import { TablePagination } from "./TablePagination";
import { Table } from "../ui/table";

export const TableUI = ({
  data,
  columns,
  handlePreviousPage,
  handleNextPage,
  currentPage,
  totalPages,
}: {
  data: User[];
  columns: any;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  currentPage: number;
  totalPages: number;
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-screen p-10 lg:px-20 font-geistSans">
      <TableFilters table={table} />
      <div className="w-full overflow-auto border border-gray-200 rounded-lg shadow dark:border-gray-800">
        <Table>
          <TableHeaderUI table={table} />
          <TableBodyComponent table={table} />
        </Table>
      </div>
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};
