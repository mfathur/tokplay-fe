import { AxiosRequestConfig } from "axios";
import axiosClient from "network/apiClient";
import { useCallback, useEffect, useReducer } from "react";

interface State<T> {
  data?: T;
  error?: Error;
}

type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

export function useAxiosGet<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  const initialState: State<T> = {
    data: undefined,
    error: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>) => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...state, data: action.payload };
      case "error":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = useCallback(
    async () => {
      dispatch({ type: "loading" });
      try {
        const response = await axiosClient.get(url, {
          ...options,
        });

        const data = response?.data.data;

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: error as Error });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url, JSON.stringify(options)]
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, fetchData]);

  return { ...state, refetch: fetchData };
}
