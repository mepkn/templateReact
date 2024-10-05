import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todo {
  id: string;
  title: string;
  body: string;
  userId: string;
}

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "posts",
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;
