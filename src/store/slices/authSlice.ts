// src/store/slices/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
	user: any | null
	isAuthenticated: boolean
	token: string | null
}

const initialState: AuthState = {
	user: null,
	isAuthenticated: false,
	token: null,
}

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<any>) => {
			state.user = action.payload
			state.isAuthenticated = !!action.payload
		},
		setToken: (state, action: PayloadAction<string | null>) => {
			state.token = action.payload
		},
		logout: (state) => {
			state.user = null
			state.isAuthenticated = false
			state.token = null
		},
	},
})

export const { setUser, setToken, logout } = authSlice.actions
export default authSlice.reducer
