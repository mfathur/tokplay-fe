import { AxiosInstance, Method } from "axios";
import { useState } from "react";

type ConfigObj = {
  axiosInstance: AxiosInstance;
  method: Method;
  endpoint: string;
  requestConfig: {};
};

/**
 * Custom hooks for manually triggered axios
 */
const useAxiosFunction = (): [boolean, string | null, any, Function] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const axiosFetch = async ({
    axiosInstance,
    method,
    endpoint,
    requestConfig = {},
  }: ConfigObj) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance({
        url: endpoint,
        method: method,
        ...requestConfig,
      });

      const data = response?.data;
      setData(data);
      setError(null);
    } catch (error: any) {
      setError(error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, error, data, axiosFetch];
};

export default useAxiosFunction;
