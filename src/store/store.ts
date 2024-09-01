import filteredReducer from "./filteredSlice/filteredSlice"
import { userApi } from "./userApi/userApi"

import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
	reducer: {
		[userApi.reducerPath]: userApi.reducer,
		filteredReducer: filteredReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
	devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
