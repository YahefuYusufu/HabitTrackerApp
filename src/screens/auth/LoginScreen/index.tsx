import React, { useState } from "react"
import { firebaseAuth } from "@services/firebase/auth"
import { View, KeyboardAvoidingView, Platform, Alert } from "react-native"
import { Text } from "react-native-paper"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AuthStackParamList } from "../../../types/navigation"
import { LoginForm } from "./components/LoginForm"
import { useStyles } from "./styles"
import { LoginFormData } from "@screens/auth/types"
import Animated, { FadeIn, FadeOut, SlideInDown } from "react-native-reanimated"

type LoginScreenProps = {
	navigation: NativeStackNavigationProp<AuthStackParamList, "Login">
}

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
	const styles = useStyles()
	const [isLoading, setIsLoading] = useState(false)

	const handleLogin = async (data: LoginFormData) => {
		try {
			setIsLoading(true)
			await firebaseAuth.signIn(data.email, data.password)
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
					<Text variant="headlineLarge" style={styles.title}>
						Welcome Back!
					</Text>
					<Text variant="titleMedium" style={styles.subtitle}>
						Sign in to continue
					</Text>

					<LoginForm
						onSubmit={handleLogin}
						onForgotPassword={handleForgotPassword}
						isLoading={isLoading}
					/>

					<View style={styles.signupContainer}>
						<Text variant="bodyMedium" style={styles.signupText}>
							Don't have an account?{" "}
						</Text>
						<Text
							variant="bodyMedium"
							style={styles.signupLink}
							onPress={handleSignUp}>
							Sign Up
						</Text>
					</View>
				</Animated.View>
			</KeyboardAvoidingView>
		</Animated.View>
	)
}
