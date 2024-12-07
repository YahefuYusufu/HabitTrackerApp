// src/services/firebase/config.ts
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"

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

// Just use getAuth() for now
export const auth = getAuth(app)
export const db = getFirestore(app)
