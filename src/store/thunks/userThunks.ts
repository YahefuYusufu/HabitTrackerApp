import { createAsyncThunk } from "@reduxjs/toolkit"
import {
	setLoading,
	setError,
	setProfile,
	setSettings,
} from "../slices/userSlice"
import { auth, db } from "@services/firebase/config"
import { doc, getDoc, updateDoc } from "firebase/firestore"

export const fetchUserProfile = createAsyncThunk(
	"user/fetchProfile",
	async (_, { dispatch }) => {
		try {
			dispatch(setLoading(true))
			const userId = auth.currentUser?.uid
			if (!userId) throw new Error("No user logged in")

			const userDoc = await getDoc(doc(db, "users", userId))
			if (userDoc.exists()) {
				dispatch(setProfile(userDoc.data() as UserProfile))
			}
		} catch (error: any) {
			dispatch(setError(error.message))
			throw error
		} finally {
			dispatch(setLoading(false))
		}
	}
)

export const updateUserProfile = createAsyncThunk(
	"user/updateProfile",
	async (profileData: Partial<UserProfile>, { dispatch }) => {
		try {
			dispatch(setLoading(true))
			const userId = auth.currentUser?.uid
			if (!userId) throw new Error("No user logged in")

			await updateDoc(doc(db, "users", userId), profileData)
			dispatch(updateProfile(profileData))
		} catch (error: any) {
			dispatch(setError(error.message))
			throw error
		} finally {
			dispatch(setLoading(false))
		}
	}
)
