import { useEffect, useState } from 'react';
import { APIError } from './apiErrors';


// Custom hook to fetch data with optional parameters

const useFetchDatas = <T>(
  fetchFunction: (params?: any) => Promise<T>, params?: any
): {
  data: T | null;
  isLoading: boolean;
  error: APIError | null;
} => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<APIError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedData = await fetchFunction(params);
        setData(fetchedData);
      } catch (error) {
        if (error instanceof APIError) {
          setError(error);
        } else {
          console.error('Unexpected error:', error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, params]);

  return { data, isLoading, error };
};

export default useFetchDatas;