import { ToastContext } from "contexts/ToastContext";
import { useContext } from "react";

const useToastContext = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw Error("useToastContext must be used inside ToastContextProvider");
  }

  return context;
};

export default useToastContext;
