import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryServices = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://640b68ce81d8a32198e3826b.mockapi.io/api/v1/", // https://640b314281d8a32198dce736.mockapi.io/api/v1/
  }),
  // tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: ({ search }) => {
        return `teacher?search=${search}`;
      },
      // transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      // providesTags: ["Category"],
    }),
    getCategory: builder.query({
      query: (id) => {
        return `teacher/${id}`;
      },
      // providesTags: ["Category"],
    }),
    addCategory: builder.mutation({
      query: (body) => ({
        url: "teacher",
        method: "POST",
        body,
      }),
      // invalidatesTags: ["Category"],
    }),
    // updateCategory,
    updateCategory: builder.mutation({
      query: (body, id) => ({
        url: `teacher/${id}`,
        method: "PUT",
        body,
      }),
      // invalidatesTags: ["Category"],
    }),
    // deleteCategory,
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `teacher/${id}`,
        method: "DELETE",
      }),
      // invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryServices;

export default categoryServices;
