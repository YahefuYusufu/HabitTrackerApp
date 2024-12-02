// src/screens/auth/SignupScreen/index.tsx
import React, { useState } from "react"
import {
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	Alert,
} from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AuthStackParamList } from "../../../types/navigation"
import { SignupForm } from "./components/SignupForm"
import { styles } from "./styles"
import { SignupFormData } from "../types"
import Animated, {
	FadeIn,
	FadeOut,
	SlideInRight,
} from "react-native-reanimated"

type SignupScreenProps = {
	navigation: NativeStackNavigationProp<AuthStackParamList, "Signup">
}

export const SignupScreen = ({ navigation }: SignupScreenProps) => {
	const [isLoading, setIsLoading] = useState(false)

	const handleSignup = async (data: SignupFormData) => {
		try {
			setIsLoading(true)
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000))
			console.log("Signup data:", data)
			// Handle successful signup
		} catch (error) {
			Alert.alert(
				"Error",
				error instanceof Error ? error.message : "Failed to sign up"
			)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.container}>
				<Animated.View
					entering={SlideInRight.delay(300)}
					style={styles.content}>
					<Text style={styles.title}>Create Account</Text>
					<Text style={styles.subtitle}>
						Start your journey to better habits
					</Text>

					<SignupForm onSubmit={handleSignup} isLoading={isLoading} />

					<TouchableOpacity
						onPress={() => navigation.navigate("Login")}
						style={styles.loginContainer}
						disabled={isLoading}>
						<Text style={styles.loginText}>Already have an account? </Text>
						<Text style={styles.loginLink}>Login</Text>
					</TouchableOpacity>
				</Animated.View>
			</KeyboardAvoidingView>
		</Animated.View>
	)
}
