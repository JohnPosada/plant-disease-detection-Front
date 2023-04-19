import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_URL;
interface Result {
  accuracy: string;
  photo_url: string;
  sickness: string;
}

interface PlantResult {
  result: Result;
}

export const plantApi = createApi({
  reducerPath: "plantApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getResult: builder.query<PlantResult, string>({
      query: (url) => ({
        url: `/api/result?photo_url=${url}`,
        method: "GET",
      }),
    }),
    uploadImage: builder.mutation<string, File>({
      query: (file) => {
        const formData = new FormData();
        formData.append("uploads", file);
        return {
          url: "/api/upload",
          method: "POST",
          body: formData,
        };
      },
    }),
    getPhotos: builder.query<Result[], string>({
      query: (username) => ({
        url: "/api/photos",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetResultQuery, useUploadImageMutation, useGetPhotosQuery } =
  plantApi;
