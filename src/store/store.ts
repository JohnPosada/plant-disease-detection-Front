import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth.api";
import authSlice from "./auth/authSlice";
import { plantApi } from "./api/plant.api";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    authApi: authApi.reducer,
    plantApi: plantApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(plantApi.middleware)
      .concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
