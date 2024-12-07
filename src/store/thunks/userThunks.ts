// src/store/thunks/userThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit"
import { userService } from "../../services/firebase/user"
import { setProfile, setLoading, setError } from "../slices/userSlice"
import { UserProfile } from "../../types/firestore"

export const fetchUserProfile = createAsyncThunk(
	"user/fetchProfile",
	async (uid: string, { dispatch }) => {
		try {
			dispatch(setLoading(true))
			const profile = await userService.getProfile(uid)
			dispatch(setProfile(profile))
			return profile
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
	async (
		{ uid, data }: { uid: string; data: Partial<UserProfile> },
		{ dispatch }
	) => {
		try {
			dispatch(setLoading(true))
			await userService.updateProfile(uid, data)
			dispatch(setProfile(data))
			return data
		} catch (error: any) {
			dispatch(setError(error.message))
			throw error
		} finally {
			dispatch(setLoading(false))
		}
	}
)
