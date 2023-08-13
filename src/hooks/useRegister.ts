import { useState } from "react";
import axiosClient from "network/apiClient";
import { AxiosError, HttpStatusCode } from "axios";
import useToastContext from "./useToastContext";

const useRegister = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [registerSucceed, setRegisterSucceed] = useState<boolean>(false);
  const { showSuccessToastWithMsg, showErrorToastWithMsg } = useToastContext();

  const register = async (
    email: string,
    password: string,
    username: string
  ) => {
    setIsLoading(true);
    try {
      const payload = { email, password, username };
      const response = await axiosClient.post("/auth/register", payload);

      if (response.status === HttpStatusCode.Created) {
        showSuccessToastWithMsg("Your account successfully registered");
        setRegisterSucceed(true);
      }
    } catch (error) {
      setRegisterSucceed(false);
      const axiosError = error as AxiosError;
      const errorStatusCode = axiosError.response?.status;

      if (errorStatusCode === HttpStatusCode.Conflict) {
        const errorResponse = JSON.parse(axiosError.request?.response);

        showErrorToastWithMsg(errorResponse.message ?? "Error");
      } else {
        showErrorToastWithMsg("Internal Server Error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, registerSucceed };
};

export default useRegister;
