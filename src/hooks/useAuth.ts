// src/hooks/useAuth.ts
import { LoginFormData, SignupData } from "../types/auth"
import { useAuthStore } from "../store/authStore"

export const useAuth = () => {
	const { user, isLoading, error, setUser, setLoading, setError, reset } =
		useAuthStore()

	const login = async ({ email, password }: LoginFormData) => {
		setLoading(true)
		try {
			// Firebase logic will go here later
			setLoading(false)
		} catch (err: unknown) {
			const errorMessage =
				err instanceof Error ? err.message : "An unknown error occurred"
			setError(errorMessage)
			setLoading(false)
		}
	}

	const signup = async ({ email, password, name }: SignupData) => {
		setLoading(true)
		try {
			// Firebase logic will go here later
			setLoading(false)
		} catch (err: unknown) {
			const errorMessage =
				err instanceof Error ? err.message : "An unknown error occurred"

			setError(errorMessage)
			setLoading(false)
		}
	}

	const logout = () => {
		reset()
	}

	return {
		user,
		isLoading,
		error,
		login,
		signup,
		logout,
	}
}
