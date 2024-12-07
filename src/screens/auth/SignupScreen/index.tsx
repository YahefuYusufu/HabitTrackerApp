import React, { useState } from "react"
import {
	View,
	KeyboardAvoidingView,
	Platform,
	Alert,
	ScrollView,
} from "react-native"
import { Text } from "react-native-paper"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AuthStackParamList } from "../../../types/navigation"
import { SignupForm } from "./components/SignupForm"
import { useStyles } from "./styles"
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
	const styles = useStyles()
	const [isLoading, setIsLoading] = useState(false)

	const handleSignup = async (data: SignupFormData) => {
		try {
			setIsLoading(true)
			await new Promise((resolve) => setTimeout(resolve, 2000))
			console.log("Signup data:", data)
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
				style={styles.container}
				keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}>
				<ScrollView
					contentContainerStyle={styles.scrollContent}
					showsVerticalScrollIndicator={false}
					keyboardShouldPersistTaps="handled"
					bounces={false}>
					<Animated.View
						entering={SlideInRight.delay(300)}
						style={styles.content}>
						<Text variant="headlineLarge" style={styles.title}>
							Create Account
						</Text>
						<Text variant="titleMedium" style={styles.subtitle}>
							Start your journey to better habits
						</Text>

						<SignupForm onSubmit={handleSignup} isLoading={isLoading} />

						<View style={styles.loginContainer}>
							<Text variant="bodyMedium" style={styles.loginText}>
								Already have an account?{" "}
							</Text>
							<Text
								variant="bodyMedium"
								style={styles.loginLink}
								onPress={() => navigation.navigate("Login")}>
								Login
							</Text>
						</View>
					</Animated.View>
				</ScrollView>
			</KeyboardAvoidingView>
		</Animated.View>
	)
}
