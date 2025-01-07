import { api } from ".";
import { IUser, IUserForm } from "../../types";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<IUser[], any>({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    deleteUser: build.mutation<any, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    createUser: build.mutation<IUser, IUserForm>({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    updateUser: build.mutation<IUser, { id: string; body: IUserForm }>({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserQuery, useDeleteUserMutation, useCreateUserMutation, useUpdateUserMutation } = userApi;
