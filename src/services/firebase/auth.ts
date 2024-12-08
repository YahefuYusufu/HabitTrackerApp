import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	User,
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "./config"

// Define return type interfaces
interface AuthSuccess {
	success: true
	user: User
}

interface AuthError {
	success: false
	error: Error
}

type AuthResponse = AuthSuccess | AuthError

export const firebaseAuth = {
	async signUp(
		email: string,
		password: string,
		fullName: string
	): Promise<AuthResponse> {
		try {
			// First create the auth user
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)

			// Then create a user profile document in Firestore
			const userRef = doc(db, "users", userCredential.user.uid)
			await setDoc(
				userRef,
				{
					email,
					fullName,
					createdAt: new Date().toISOString(),
				},
				{ merge: true }
			)

			return {
				success: true,
				user: userCredential.user,
			}
		} catch (error) {
			return {
				success: false,
				error:
					error instanceof Error ? error : new Error("Unknown error occurred"),
			}
		}
	},

	async signIn(email: string, password: string): Promise<AuthResponse> {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			)
			return {
				success: true,
				user: userCredential.user,
			}
		} catch (error) {
			return {
				success: false,
				error:
					error instanceof Error ? error : new Error("Unknown error occurred"),
			}
		}
	},
}
