import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { User } from "@/types/user";
import { Column, Table } from "@tanstack/react-table";
import { ChangeEvent } from "react";

export const TableFilters = ({ table }: { table: Table<User> }) => (
  <div className="flex items-center py-4">
    <Input
      placeholder="Find user"
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        table.setGlobalFilter(e.target.value)
      }
      className="max-w-44 sm:max-w-sm"
    />
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto">
          Columns <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {table
          .getAllColumns()
          .filter((column: Column<User, unknown>) => column.getCanHide())
          .map((column: Column<User, unknown>) => (
            <DropdownMenuCheckboxItem
              key={column.id}
              className="capitalize"
              checked={column.getIsVisible()}
              onCheckedChange={(value) => column.toggleVisibility(!!value)}
            >
              {column.id}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
