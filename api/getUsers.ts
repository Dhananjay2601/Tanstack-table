import { baseAxios } from "@/lib/apiHead";
import { User } from "@/types/user";
import { AxiosError } from "axios";

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

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetchData("/users");
    if (response.data) {
      return response.data;
    }
    throw new Error("No user data found.");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response
          ? `API error: ${error.response.status} - ${error.response.data}`
          : "API error: No response received from the server."
      );
    }
    throw error;
  }
};
