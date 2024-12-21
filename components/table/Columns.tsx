/* eslint-disable @typescript-eslint/no-explicit-any */
import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { User } from "@/types/user";

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown />
        </Button>
      );
    },
  }),
  columnHelper.accessor("username", {
    header: "Username",
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
  }),
  columnHelper.accessor((row: any) => row.address?.city, {
    id: "city",
    header: "City",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("phone", {
    header: "Phone",
    // cell: (info) => info.getValue(),
    cell: (info) => (
      <a
        href={`tel:${info.getValue()}`}
        target="_blank"
        className="text-blue-600 hover:underline"
      >
        {info.getValue()}
      </a>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("website", {
    header: "Website",
    cell: (info) => (
      <a
        href={`http://${info.getValue()}`}
        target="_blank"
        className="text-blue-600 hover:underline"
      >
        {info.getValue()}
      </a>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row: any) => row.company?.name, {
    id: "company",
    header: "Company",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];
