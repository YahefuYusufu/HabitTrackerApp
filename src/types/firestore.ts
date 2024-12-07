export interface UserProfile {
	uid: string
	email: string
	fullName: string
	photoURL?: string
	createdAt: string
	updatedAt: string
}

export interface UserSettings {
	uid: string
	notifications: boolean
	theme: "light" | "dark"
	language: string
}
