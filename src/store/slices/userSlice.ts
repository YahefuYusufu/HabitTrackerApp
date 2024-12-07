import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Define types for better TypeScript support
interface UserProfile {
	id: string
	email: string
	fullName: string
	photoURL?: string
	createdAt: string
	// Add more profile fields as needed
}

interface UserSettings {
	notifications: boolean
	theme: "light" | "dark"
	language: string
	// Add more settings as needed
}

interface UserState {
	profile: UserProfile | null
	settings: UserSettings | null
	isLoading: boolean
	error: string | null
}

const initialState: UserState = {
	profile: null,
	settings: null,
	isLoading: false,
	error: null,
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setProfile: (state, action: PayloadAction<UserProfile | null>) => {
			state.profile = action.payload
		},
		setSettings: (state, action: PayloadAction<UserSettings | null>) => {
			state.settings = action.payload
		},
		updateProfile: (state, action: PayloadAction<Partial<UserProfile>>) => {
			if (state.profile) {
				state.profile = { ...state.profile, ...action.payload }
			}
		},
		updateSettings: (state, action: PayloadAction<Partial<UserSettings>>) => {
			if (state.settings) {
				state.settings = { ...state.settings, ...action.payload }
			}
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload
		},
		resetUser: (state) => {
			state.profile = null
			state.settings = null
			state.isLoading = false
			state.error = null
		},
	},
})

export const {
	setProfile,
	setSettings,
	updateProfile,
	updateSettings,
	setLoading,
	setError,
	resetUser,
} = userSlice.actions

export default userSlice.reducer
