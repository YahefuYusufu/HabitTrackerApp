export interface User {
	id: string
	email: string
	password: string
}

export interface AuthState {
	user: User | null
	isLoading: boolean
	error: string | null
}

export interface AuthActions {
	setUser: (user: User | null) => void
	setLoading: (loading: boolean) => void
	setError: (error: string | null) => void
	reset: () => void
}

export interface LoginFormData {
	email: string
	password: string
}

export interface SignupFormData {
	email: string
	password: string
	fullName: string
}

export interface SignupFormData extends LoginFormData {
	name: string
	confirmPassword: string
}
