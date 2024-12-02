// src/screens/auth/ForgotPasswordScreen/index.tsx
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
import { ForgotPasswordForm } from "./components/ForgotPasswordForm"
import { styles } from "./styles"
import { ForgotPasswordFormData } from "../types"
import Animated, { FadeIn, FadeOut, SlideInLeft } from "react-native-reanimated"

type ForgotPasswordScreenProps = {
	navigation: NativeStackNavigationProp<AuthStackParamList, "ForgotPassword">
}

export const ForgotPasswordScreen = ({
	navigation,
}: ForgotPasswordScreenProps) => {
	const [isLoading, setIsLoading] = useState(false)

	const handleResetPassword = async (data: ForgotPasswordFormData) => {
		try {
			setIsLoading(true)
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000))
			console.log("Reset password for:", data.email)
			Alert.alert(
				"Success",
				"If an account exists with this email, you will receive a password reset link.",
				[
					{
						text: "OK",
						onPress: () => navigation.navigate("Login"),
					},
				]
			)
		} catch (error) {
			Alert.alert(
				"Error",
				error instanceof Error ? error.message : "Failed to send reset link"
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
				<Animated.View entering={SlideInLeft.delay(300)} style={styles.content}>
					<Text style={styles.title}>Reset Password</Text>
					<Text style={styles.subtitle}>
						Enter your email to reset your password
					</Text>

					<ForgotPasswordForm
						onSubmit={handleResetPassword}
						isLoading={isLoading}
					/>

					<TouchableOpacity
						onPress={() => navigation.navigate("Login")}
						style={styles.backToLogin}
						disabled={isLoading}>
						<Text style={styles.backToLoginText}>Back to Login</Text>
					</TouchableOpacity>
				</Animated.View>
			</KeyboardAvoidingView>
		</Animated.View>
	)
}
