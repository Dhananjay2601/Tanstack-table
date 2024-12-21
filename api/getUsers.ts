import { baseAxios } from "@/lib/apiHead";
import { User } from "@/types/user";

type FetchResponse = {
  data: User[] | null;
  status: number | null;
};

const fetchData = async (url: string): Promise<FetchResponse> => {
  try {
    const { data, status } = await baseAxios.get(url);
    if (status === 200) return { data, status };
    throw new Error(`Unexpected status code: ${status}`);
  } catch (err) {
    console.error("API error:", err);
    return { data: null, status: null };
  }
};

export const fetchUsers = async () => {
  return fetchData("/users");
};
