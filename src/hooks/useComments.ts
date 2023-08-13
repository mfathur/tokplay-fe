import Comment from "types/comment";
import { useAxiosGet } from "./useAxiosGet";
import useAuthContext from "./useAuthContext";
import axiosClient from "network/apiClient";
import { AxiosError, HttpStatusCode } from "axios";
import useToastContext from "./useToastContext";
import { useState } from "react";

const useComments = (videoId: string) => {
  const { user, accessToken, deleteAuthDataFromAppState } = useAuthContext();
  const { showInfoToastWithMsg } = useToastContext();
  const [needLoginAgain, setNeedLoginAgain] = useState<boolean>(false);

  const {
    data: comments,
    error,
    refetch,
  } = useAxiosGet<Comment[]>(`videos/${videoId}/comments`);

  const sendVideoComment = async (comment: string) => {
    try {
      const response = await axiosClient.post(
        `/videos/${videoId}/comments`,
        {
          username: user?.username,
          comment: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const statusCode = response?.status;
      if (statusCode === 201) {
        refetch();
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorStatusCode = axiosError.response?.status;

      if (errorStatusCode === HttpStatusCode.Forbidden) {
        showInfoToastWithMsg("Please login again to write a comment");
        deleteAuthDataFromAppState();
        setNeedLoginAgain(true);
      }
    }
  };

  return { comments, error, sendVideoComment, needLoginAgain };
};

export default useComments;
