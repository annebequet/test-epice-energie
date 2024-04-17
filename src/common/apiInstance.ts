import { APIError } from "./apiErrors";

export const fetchData = async <T>(apiCall: () => Promise<T>): Promise<T> => {
  try {
    const data: T = await apiCall();
    return data;
  } catch (error) {
    throw new APIError('Error fetching data: ' + error);
  }
};