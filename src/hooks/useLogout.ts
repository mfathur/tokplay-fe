import useAuthContext from "./useAuthContext";

const useLogout = () => {
  const { deleteAuthDataFromAppState } = useAuthContext();

  const logout = () => {
    deleteAuthDataFromAppState();
  };

  return { logout };
};

export default useLogout;
