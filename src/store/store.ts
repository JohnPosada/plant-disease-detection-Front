import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    authApi: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
