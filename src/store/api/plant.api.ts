import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_URL + "api/";

interface Result {
  accuracy: string;
  photo_url: string;
  sickness: string;
}

interface HistorialResult {
  data: Result[];
}

interface PlantResult {
  result: Result;
}

interface UploadImageResult {
  photo_url: string;
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
        url: `results/${url}`,
        method: "GET",
      }),
    }),
    uploadImage: builder.mutation<UploadImageResult, File>({
      query: (file) => {
        const formData = new FormData();
        formData.append("uploads", file);
        return {
          url: "photos",
          method: "POST",
          body: formData,
        };
      },
    }),
    getPhotos: builder.query<HistorialResult, void>({
      query: () => ({
        url: "results",

        method: "GET",
      }),
    }),
  }),
});

export const { useGetResultQuery, useUploadImageMutation, useGetPhotosQuery } =
  plantApi;
