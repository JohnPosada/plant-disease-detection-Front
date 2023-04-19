import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginUserCredentials,
  createUserCredentials,
} from "../../hooks/useAuthStore";

const baseUrl = "http://localhost:8080/";

interface UserRes {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
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
      query: ({ email, password }: createUserCredentials) => ({
        url: "/register",
        method: "POST",
        body: { email, password },
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
