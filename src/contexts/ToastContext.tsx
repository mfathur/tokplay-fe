import ToastsContainer from "components/toasts-container.component";
import { Reducer, createContext, useReducer } from "react";
import Toast from "types/toast";

enum ToastActionType {
  ADD_TOAST = "ADD_TOAST",
  DELETE_TOAST = "DELETE_TOAST",
}

interface ToastActionAdd {
  type: ToastActionType;
  payload: Toast;
}

interface ToastActionRemove {
  type: ToastActionType;
  payload: number;
}

type ToastAction = ToastActionAdd | ToastActionRemove;

interface ToastState {
  toasts: Toast[];
}

const initialState: ToastState = {
  toasts: [],
};

interface IToastContext {
  deleteToastBy: (id: number) => void;
  showErrorToastWithMsg: (message: string) => void;
  showSuccessToastWithMsg: (message: string) => void;
  showInfoToastWithMsg: (message: string) => void;
}

export const ToastContext = createContext<IToastContext>({
  deleteToastBy: () => {},
  showErrorToastWithMsg: () => {},
  showSuccessToastWithMsg: () => {},
  showInfoToastWithMsg: () => {},
});

const toastReducer: Reducer<ToastState, ToastAction> = (
  state = initialState,
  action
): ToastState => {
  const { type, payload } = action;

  switch (type) {
    case ToastActionType.ADD_TOAST:
      return { ...state, toasts: [...state.toasts, payload as Toast] };

    case ToastActionType.DELETE_TOAST:
      const updatedToasts = state.toasts.filter(
        (toast) => toast.id !== payload
      );
      return { ...state, toasts: updatedToasts };
    default:
      return state;
  }
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const ToastContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  const addToast = (type: string, message: string) => {
    const id = Math.floor(Math.random() * 1000);

    const newToast: Toast = {
      id,
      message,
      type,
    };
    dispatch({ type: ToastActionType.ADD_TOAST, payload: newToast });
  };

  const addSuccessToast = (message: string) => {
    addToast("success", message);
  };

  const addErrorToast = (message: string) => {
    addToast("error", message);
  };

  const addInfoToast = (message: string) => {
    addToast("info", message);
  };

  const deleteToastBy = (id: number) => {
    dispatch({ type: ToastActionType.DELETE_TOAST, payload: id });
  };

  return (
    <ToastContext.Provider
      value={{
        deleteToastBy,
        showErrorToastWithMsg: addErrorToast,
        showSuccessToastWithMsg: addSuccessToast,
        showInfoToastWithMsg: addInfoToast,
      }}
    >
      <ToastsContainer toasts={state.toasts} />
      {children}
    </ToastContext.Provider>
  );
};
