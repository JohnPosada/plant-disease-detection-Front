import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginUserCredentials,
  createUserCredentials,
} from "../../hooks/useAuthStore";

const baseUrl = import.meta.env.VITE_API_URL;

export interface UserRes {
  token: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation<UserRes, LoginUserCredentials>({
      query: ({ email, password }: LoginUserCredentials) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    register: builder.mutation<UserRes, createUserCredentials>({
      query: ({ email, username, password }: createUserCredentials) => ({
        url: "/user",
        method: "POST",
        body: { email, username, password },
      }),
    }),
    recovery: builder.mutation<void, string>({
      query: (email) => ({
        url: "/recovery",
        method: "POST",
        body: { email },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useRecoveryMutation } =
  authApi;
