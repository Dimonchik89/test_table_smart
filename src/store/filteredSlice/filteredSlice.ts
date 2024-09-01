import { fetchData } from "../../services/http"
import { InputName } from "../../types/inputName"
import { User } from "../../types/user"

import { PayloadAction, createSlice, createAsyncThunk, SerializedError } from "@reduxjs/toolkit"

interface InitialState {
	search: {
		name: string
		username: string
		email: string
		phone: string
	}
	isLoading: boolean
	isError: boolean
	error: SerializedError | null
	allUsers: User[]
	resultUser: User[]
}

export const fetchUsers = createAsyncThunk("filteredSlice/users", async () => {
	const data = await fetchData()
	return data
})

const initialState: InitialState = {
	search: {
		name: "",
		username: "",
		email: "",
		phone: "",
	},
	isLoading: false,
	isError: false,
	error: null,
	allUsers: [],
	resultUser: [],
}

const filteredSlice = createSlice({
	name: "filteredSlice",
	initialState,
	reducers: {
		initialUsers: (state, action) => {
			state.resultUser = action.payload
		},
		filteredUsers: (state, action: PayloadAction<{ name: InputName; value: string }>) => {
			state.search[action.payload.name] = action.payload.value

			state.resultUser = state.allUsers.filter(
				(user) =>
					(state.search.name ? user.name.toLowerCase().includes(state.search.name.toLowerCase()) : true) &&
					(state.search.username ? user.username.toLowerCase().includes(state.search.username.toLowerCase()) : true) &&
					(state.search.email ? user.email.toLowerCase().includes(state.search.email.toLowerCase()) : true) &&
					(state.search.phone ? user.phone.includes(state.search.phone) : true)
			)
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.isError = false
			state.isLoading = true
		})
		builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
			state.isLoading = false
			state.allUsers = action.payload
			state.resultUser = action.payload
		})
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.isLoading = false
			state.isError = true
			state.error = action.error
		})
	},
})

export const { filteredUsers, initialUsers } = filteredSlice.actions
export default filteredSlice.reducer
