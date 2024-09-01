import { RootState } from "../store"

import { createSelector } from "@reduxjs/toolkit"

const baseState = (state: RootState) => state.filteredReducer

export const search = createSelector(baseState, (state) => state.search)
export const resultUser = createSelector(baseState, (state) => state.resultUser)
export const isLoading = createSelector(baseState, (state) => state.isLoading)
export const isError = createSelector(baseState, (state) => state.isError)
export const error = createSelector(baseState, (state) => state.error)
export const allUsers = createSelector(baseState, (state) => state.allUsers)
