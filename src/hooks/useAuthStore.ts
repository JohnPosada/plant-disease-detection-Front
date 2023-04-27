import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import {
  useLoginMutation,
  useRecoveryMutation,
  useRegisterMutation,
  UserRes,
} from "../store/api/auth.api";
import { login, loginError, logout } from "../store/auth/authSlice";
import { AppDispatch, RootState } from "../store/store";

export interface LoginUserCredentials {
  email: string;
  password: string;
}
export interface createUserCredentials {
  email: string;
  username: string;
  password: string;
}

interface claims {
  username: string;
  email: string;
}

export const useAuthStore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { status, user, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(logout());
    const user = jwtDecode<claims>(token);
    return dispatch(login(user));
  };

  const startLogin = async (token: string) => {
    if (token) {
      const user = jwtDecode<claims>(token ?? "");
      console.log(user);
      localStorage.setItem("token", token);
      return dispatch(login(user));
    }
  };

  const startLoginError = async (error: string) => {
    return dispatch(loginError(error));
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };

  return {
    checkAuth,
    status,
    user,
    errorMessage,
    startLogin,
    startLoginError,
    startLogout,
  };
};
