import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6764ec6a52b2a7619f5dd2db.mockapi.io",
  }),
  endpoints: () => ({}),
  tagTypes: ["Users"],
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
