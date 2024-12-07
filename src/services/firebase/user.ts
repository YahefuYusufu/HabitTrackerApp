// src/services/firebase/user.ts
import { db } from "./config"
import {
	doc,
	setDoc,
	getDoc,
	updateDoc,
	serverTimestamp,
} from "firebase/firestore"
import type { UserProfile } from "../../types/firestore"

export const userService = {
	// Create user profile after signup
	async createProfile(uid: string, data: Partial<UserProfile>) {
		try {
			const userRef = doc(db, "users", uid)
			const userData = {
				uid,
				email: data.email,
				fullName: data.fullName || "",
				photoURL: data.photoURL || "",
				createdAt: serverTimestamp(),
				updatedAt: serverTimestamp(),
			}

			await setDoc(userRef, userData)
			return userData
		} catch (error) {
			throw error
		}
	},

	// Get user profile
	async getProfile(uid: string) {
		try {
			const userRef = doc(db, "users", uid)
			const userSnap = await getDoc(userRef)

			if (userSnap.exists()) {
				return userSnap.data() as UserProfile
			}
			return null
		} catch (error) {
			throw error
		}
	},

	// Update user profile
	async updateProfile(uid: string, data: Partial<UserProfile>) {
		try {
			const userRef = doc(db, "users", uid)
			await updateDoc(userRef, {
				...data,
				updatedAt: serverTimestamp(),
			})
		} catch (error) {
			throw error
		}
	},
}
