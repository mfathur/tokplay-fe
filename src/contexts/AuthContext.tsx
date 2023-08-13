import { Reducer, createContext, useEffect, useReducer } from "react";
import { LOCAL_STORAGE_KEYS } from "utils/constant";

type User = {
  email: string;
  username: string;
};

enum AuthActionType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  REGISTER = "REGISTER",
}

interface AuthAction {
  type: AuthActionType;
  payload: AuthState;
}

interface AuthState {
  user: User | null;
  accessToken: string;
}

const initialState: AuthState = {
  user: null,
  accessToken: "",
};

interface IAuthContext {
  user: User | null;
  accessToken: string;
  saveAuthDataToAppState: (user: User, accessToken: string) => void;
  deleteAuthDataFromAppState: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  ...initialState,
  saveAuthDataToAppState: () => {},
  deleteAuthDataFromAppState: () => {},
});

export const authReducer: Reducer<AuthState, AuthAction> = (
  state = initialState,
  action
): AuthState => {
  const { type, payload } = action;

  switch (type) {
    case AuthActionType.LOGIN:
      return { ...payload };

    case AuthActionType.LOGOUT:
      return initialState;

    case AuthActionType.REGISTER:
      return { ...payload };

    default:
      return state;
  }
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // check if user already logged in
    const user = localStorage.getItem(LOCAL_STORAGE_KEYS.USER);
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

    if (user && token) {
      const userData: User = JSON.parse(user);
      dispatch({
        type: AuthActionType.LOGIN,
        payload: { user: userData, accessToken: token },
      });
    }
  }, []);

  const saveAuthDataToAppState = (user: User, accessToken: string) => {
    dispatch({
      type: AuthActionType.LOGIN,
      payload: { user: user, accessToken: accessToken },
    });
    saveToLocalStorage(JSON.stringify(user), accessToken);
  };

  const saveToLocalStorage = (user: string, token: string) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER, user);
    localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, token);
  };

  const deleteAuthDataFromAppState = () => {
    dispatch({
      type: AuthActionType.LOGOUT,
      payload: initialState,
    });
    deleteFromLocalStorage();
  };

  const deleteFromLocalStorage = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
  };

  return (
    <AuthContext.Provider
      value={{ ...state, saveAuthDataToAppState, deleteAuthDataFromAppState }}
    >
      {children}
    </AuthContext.Provider>
  );
};
