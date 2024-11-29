import { create } from "zustand"
import { AuthState, AuthActions } from "../types/auth"

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
	user: null,
	isLoading: false,
	error: null,

	setUser: (user) => set({ user }),
	setLoading: (loading) => set({ isLoading: loading }),
	setError: (error) => set({ error }),
	reset: () => set({ user: null, isLoading: false, error: null }),
}))
