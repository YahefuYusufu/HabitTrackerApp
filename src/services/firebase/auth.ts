import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	type User,
} from "firebase/auth"
import { auth } from "./config"

export const firebaseAuth = {
	// Sign up
	async signUp(email: string, password: string): Promise<User> {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			return userCredential.user
		} catch (error: any) {
			throw new Error(error.message)
		}
	},

	// Sign in
	async signIn(email: string, password: string): Promise<User> {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			)
			return userCredential.user
		} catch (error: any) {
			throw new Error(error.message)
		}
	},

	// Reset password
	async resetPassword(email: string): Promise<void> {
		try {
			await sendPasswordResetEmail(auth, email)
		} catch (error: any) {
			throw new Error(error.message)
		}
	},

	// Sign out
	async signOut(): Promise<void> {
		try {
			await signOut(auth)
		} catch (error: any) {
			throw new Error(error.message)
		}
	},
}
