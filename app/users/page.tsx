"use client";

import { Error, Loader } from "@/components/Loading&Error";
import { columns } from "@/components/table/Columns";
import { TableUI } from "@/components/table/Table";
import { useUsers } from "@/hooks/useUsers";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserTable = () => {
  const { data, isLoading, refetch, isSuccess, error } = useUsers();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!isSuccess && !isLoading) {
      refetch();
    }
  }, [isSuccess, isLoading, refetch]);

  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam) {
      setPage(Number(pageParam));
    }
  }, [searchParams]);

  // Since there is no pagination or limit params in the given API, I have made the adjusments here
  const userData = Array.isArray(data?.data) ? data.data : [];
  const usersPerPage = 5;
  const totalPages = Math.ceil(userData.length / usersPerPage);

  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * usersPerPage;
  const paginatedUsers = userData.slice(startIndex, startIndex + usersPerPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`?page=${newPage}`);
  };

  return (
    <>
      {userData.length === 0 && isLoading ? (
        <Loader />
      ) : (
        <TableUI
          data={paginatedUsers}
          columns={columns}
          handleNextPage={() => handlePageChange(currentPage + 1)}
          handlePreviousPage={() => handlePageChange(currentPage - 1)}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
      {error && <Error message={`Error fetching users: ${error.message}`} />}
    </>
  );
};

export default UserTable;
