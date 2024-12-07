// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
export const auth = getAuth(app)
