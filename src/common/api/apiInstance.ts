import { APIError } from "./apiErrors";

export const fetchData = async <T>(apiCall: () => Promise<T>): Promise<T> => {
  try {
    const data: T = await apiCall();
    return data;
  } catch (error: any) {
    throw new APIError(error.message);
  }
};