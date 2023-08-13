import useAuthContext from "./useAuthContext";
import { useState } from "react";
import axiosClient from "network/apiClient";
import useToastContext from "./useToastContext";
import { AxiosError, HttpStatusCode } from "axios";

const useLogin = () => {
  const { saveAuthDataToAppState } = useAuthContext();
  const { showErrorToastWithMsg } = useToastContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoginSucceed, setIsLoginSucceed] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const payload = { email, password };
      const response = await axiosClient.post("/auth/login", payload);

      const data = response?.data;
      if (response.status === HttpStatusCode.Ok) {
        saveAuthDataToAppState(data.user, data.accessToken);

        setIsLoginSucceed(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorStatusCode = axiosError.response?.status;

      if (
        errorStatusCode === HttpStatusCode.NotFound ||
        errorStatusCode === HttpStatusCode.Unauthorized
      ) {
        const errorResponse = JSON.parse(axiosError.request?.response);

        showErrorToastWithMsg(errorResponse.message ?? "Error");
      } else {
        showErrorToastWithMsg("Internal Server Error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, isLoginSucceed };
};

export default useLogin;
