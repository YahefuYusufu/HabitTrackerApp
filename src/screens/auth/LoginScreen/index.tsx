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
import { LoginForm } from "./components/LoginForm"
import { styles } from "./styles"
import { LoginFormData } from "../types"
import Animated, { FadeIn, FadeOut, SlideInDown } from "react-native-reanimated"

type LoginScreenProps = {
	navigation: NativeStackNavigationProp<AuthStackParamList, "Login">
}

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
	const [isLoading, setIsLoading] = useState(false)

	const handleLogin = async (data: LoginFormData) => {
		try {
			setIsLoading(true)
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000))
			console.log("Login data:", data)
			// Handle successful login
		} catch (error) {
			Alert.alert(
				"Error",
				error instanceof Error ? error.message : "Failed to login"
			)
		} finally {
			setIsLoading(false)
		}
	}

	const handleForgotPassword = () => {
		navigation.navigate("ForgotPassword")
	}

	const handleSignUp = () => {
		navigation.navigate("Signup")
	}

	return (
		<Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.container}>
				<Animated.View entering={SlideInDown.delay(300)} style={styles.content}>
					<Text style={styles.title}>Welcome Back!</Text>
					<Text style={styles.subtitle}>Sign in to continue</Text>

					<LoginForm
						onSubmit={handleLogin}
						onForgotPassword={handleForgotPassword}
						isLoading={isLoading}
					/>

					<View style={styles.signupContainer}>
						<Text style={styles.signupText}>Don't have an account? </Text>
						<TouchableOpacity onPress={handleSignUp}>
							<Text style={styles.signupLink}>Sign Up</Text>
						</TouchableOpacity>
					</View>
				</Animated.View>
			</KeyboardAvoidingView>
		</Animated.View>
	)
}
