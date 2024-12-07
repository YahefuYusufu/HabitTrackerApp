import { create } from "zustand"

type AuthUIState = {
	isLoading: boolean
	error: string | null
	isLoginModalVisible: boolean
	validationErrors: any
	setLoading: (loading: boolean) => void
	setError: (error: string | null) => void
	setLoginModalVisible: (visible: boolean) => void
	setValidationErrors: (errors: any) => void
	reset: () => void
}

export const useAuthStore = create<AuthUIState>((set) => ({
	isLoading: false,
	error: null,
	isLoginModalVisible: false,
	validationErrors: null,

	setLoading: (loading) => set({ isLoading: loading }),
	setError: (error) => set({ error }),
	setLoginModalVisible: (visible) => set({ isLoginModalVisible: visible }),
	setValidationErrors: (errors) => set({ validationErrors: errors }),
	reset: () =>
		set({
			isLoading: false,
			error: null,
			isLoginModalVisible: false,
			validationErrors: null,
		}),
}))
