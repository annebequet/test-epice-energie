import { useEffect, useState } from 'react';
import { APIError } from './apiErrors';


// Custom hook to fetch data with optional parameters

const useFetchDatas = <T>(
  fetchFunction: () => Promise<T>
): {
  datas: T | null;
  isLoading: boolean;
  error: APIError | null;
} => {

  const [datas, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<APIError | null>(null);


  const fetchData = async () => {  
    setIsLoading(true);
    try {
      const fetchedData = await fetchFunction();
      setData(fetchedData);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof APIError) {
        setError(error);
      } else {
        console.error('Unexpected error:', error);
      }
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {        
    let isApiSubscribed = false;
    fetchData();
    return () => {
      isApiSubscribed = true;
    };
  }, []);

  return { datas, isLoading, error };
};

export default useFetchDatas;