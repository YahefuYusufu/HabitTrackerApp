import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "./config"

export const firebaseAuth = {
	async signUp(email: string, password: string, fullName: string) {
		try {
			// First create the auth user
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)

			// Then create a user profile document in Firestore
			await setDoc(doc(db, "users", userCredential.user.uid), {
				fullName,
				email,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			})

			return userCredential.user
		} catch (error: any) {
			throw error
		}
	},
}
