import { User } from "../../types/user"

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	endpoints: (builder) => ({
		getUsers: builder.query<User[], void>({
			query: () => "/users",
		}),
	}),
})

export const { useGetUsersQuery } = userApi
