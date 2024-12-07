import React, { useState } from "react"
import { View, KeyboardAvoidingView, Platform, Alert } from "react-native"
import { Text } from "react-native-paper"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AuthStackParamList } from "../../../types/navigation"
import { ForgotPasswordForm } from "./components/ForgotPasswordForm"
import { ForgotPasswordFormData } from "../types"
import Animated, { FadeIn, FadeOut, SlideInLeft } from "react-native-reanimated"
import { useStyles } from "./styles"
import { theme } from "@theme/index"

type ForgotPasswordScreenProps = {
	navigation: NativeStackNavigationProp<AuthStackParamList, "ForgotPassword">
}

export const ForgotPasswordScreen = ({
	navigation,
}: ForgotPasswordScreenProps) => {
	const styles = useStyles()
	const [isLoading, setIsLoading] = useState(false)

	const handleResetPassword = async (data: ForgotPasswordFormData) => {
		try {
			setIsLoading(true)
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
					<Text variant="headlineLarge" style={styles.title}>
						Reset Password
					</Text>
					<Text variant="titleMedium" style={styles.subtitle}>
						Enter your email to reset your password
					</Text>

					<ForgotPasswordForm
						onSubmit={handleResetPassword}
						isLoading={isLoading}
					/>

					<View style={styles.backToLogin}>
						<Text
							variant="bodyMedium"
							onPress={() => navigation.navigate("Login")}
							style={{ color: theme.colors.primary }}>
							Back to Login
						</Text>
					</View>
				</Animated.View>
			</KeyboardAvoidingView>
		</Animated.View>
	)
}
