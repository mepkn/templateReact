import { apiSlice } from "../services";

interface Todo {
  id: string;
  title: string;
  body: string;
  userId: string;
}

export const todoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "posts",
      providesTags: (result = [], error, arg) => [
        "Post",
        ...result.map(({ id }) => ({ type: "Post", id }) as const),
      ],
    }),
    getPost: builder.query<Todo, string>({
      query: (postId) => `/posts/${postId}`,
      providesTags: (result, error, arg) => [{ type: "Post", id: arg }],
    }),
  }),
});

export const { useGetTodosQuery, useGetPostQuery } = todoApi;
