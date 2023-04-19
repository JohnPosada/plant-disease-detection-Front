import { useDispatch, useSelector } from "react-redux";
import {
  useLoginMutation,
  useRecoveryMutation,
  useRegisterMutation,
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

export const useAuthStore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { status, user, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );
  const [onLogin, { isLoading, error: errorLogin, data: dataLogin }] =
    useLoginMutation();

  const [
    onRegister,
    { isLoading: isLoadingRegister, error: errorRegister, data: dataRegister },
  ] = useRegisterMutation();

  // const [onRecovery, { isLoading: isLoadingRecovery, error: errorRecovery }] =
  //   useRecoveryMutation();

  const startLogin = async ({ email, password }: LoginUserCredentials) => {
    await onLogin({ email, password });
    const { token, user } = dataLogin || {};
    console.log(user);

    if (user && token) {
      localStorage.setItem("token", token);
      return dispatch(login(user));
    }
    return dispatch(loginError(errorLogin || "Error"));
  };

  const startRegister = async ({
    email,
    username,
    password,
  }: createUserCredentials) => {
    await onRegister({ email, username, password });
    const { token, user } = dataRegister || {};

    if (user && token) {
      localStorage.setItem("token", token);
      return dispatch(login(user));
    }
    return dispatch(loginError(errorRegister || "Error"));
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };

  return { status, user, errorMessage, startLogin, startRegister, startLogout };
};
