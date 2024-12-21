import { fetchUsers } from "@/api/getUsers";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  const { data, isLoading, refetch, isSuccess, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
    placeholderData: keepPreviousData,
  });
  return {
    data,
    isLoading,
    refetch,
    isSuccess,
    error,
  };
};
