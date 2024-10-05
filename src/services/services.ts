import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    prepareHeaders: (headers) => {
      headers.set("MyHeaderInfo", "SomeValue");
      return headers;
    },
  }),
  tagTypes: ["Post"],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
