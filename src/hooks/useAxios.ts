import { AxiosInstance, Method } from "axios";
import { useEffect, useState } from "react";

type ConfigObj = {
  axiosInstance: AxiosInstance;
  method: Method;
  endpoint: string;
  requestConfig: {};
};

/**
 *  Custom hooks for automatically triggered axios
 */
const useAxios = ({
  axiosInstance,
  method,
  endpoint,
  requestConfig = {},
}: ConfigObj): [boolean, string | null, any, Function] => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const [reload, setReload] = useState(0);

  const refetch = () => setReload((prev) => prev + 1);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
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

    fetchData().then((r) => r);
  }, [axiosInstance, endpoint, method, reload, requestConfig]);

  return [isLoading, error, data, refetch];
};

export default useAxios;
