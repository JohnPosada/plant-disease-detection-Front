import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthSlice {
  status: "unauthenticated" | "authenticated";
  user: User;
  errorMessage: string | null;
}

const initialState: AuthSlice = {
  status: "authenticated",
  user: {
    id: "",
    username: "",
    email: "",
  },
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, { payload }) {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = null;
    },
    logout(state) {
      state.status = "unauthenticated";
      state.user = initialState.user;
      state.errorMessage = null;
    },
    loginError(state, { payload }) {
      state.status = "unauthenticated";
      state.user = initialState.user;
      state.errorMessage = payload;
    },
  },
});

export const { login, loginError, logout } = authSlice.actions;

export default authSlice.reducer;
