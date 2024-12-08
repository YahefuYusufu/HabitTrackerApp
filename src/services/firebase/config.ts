import { initializeApp } from "firebase/app"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import {
	getFirestore,
	initializeFirestore,
	persistentLocalCache,
	persistentSingleTabManager,
} from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Platform } from "react-native"

const firebaseConfig = {
	apiKey: "AIzaSyDHRnyMOUU-1x4hORMc44qZCrqBgkyoJdM",
	authDomain: "habittrack-a4294.firebaseapp.com",
	projectId: "habittrack-a4294",
	storageBucket: "habittrack-a4294.firebasestorage.app",
	messagingSenderId: "925695676337",
	appId: "1:925695676337:web:6249890ff6718bd68e7790",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
})

// Initialize Firestore with persistence
const db = initializeFirestore(app, {
	localCache: persistentLocalCache({
		tabManager: persistentSingleTabManager({
			forceOwnership: true,
		}),
	}),
	experimentalForceLongPolling: Platform.OS === "android",
})

export { auth, db }
