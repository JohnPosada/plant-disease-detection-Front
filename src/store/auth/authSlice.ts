import { createSlice } from "@reduxjs/toolkit";

interface User {
  username: string;
  email: string;
}

interface AuthSlice {
  status: "unauthenticated" | "authenticated";
  user: User;
  errorMessage: string | null;
}

const initialState: AuthSlice = {
  status: "unauthenticated",
  user: {
    username: "x",
    email: "x@gmail.com",
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
