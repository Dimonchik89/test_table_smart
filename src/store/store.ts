import filteredReducer from "./filteredSlice/filteredSlice"

import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
	reducer: {
		filteredReducer: filteredReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
