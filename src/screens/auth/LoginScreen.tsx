import React, { useState } from "react"
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
} from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { AuthStackParamList } from "src/types/navigation"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

type Props = NativeStackScreenProps<AuthStackParamList, "Login">

export const LoginScreen = ({ navigation }: Props) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})
	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const handleLogin = () => {
		setIsLoading(true)
		// Add login logic here
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<View style={styles.formContainer}>
					<Text style={styles.title}>Welcome Back</Text>
					<Text style={styles.subtitle}>Sign in to continue!</Text>

					<View style={styles.inputContainer}>
						<MaterialIcons name="person" size={20} color="#666" />
						<TextInput
							style={styles.input}
							placeholder="email@example.com"
							value={formData.email}
							onChangeText={(value) =>
								setFormData((prev) => ({ ...prev, email: value }))
							}
							keyboardType="email-address"
							autoCapitalize="none"
						/>
					</View>

					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							placeholder="Password"
							value={formData.password}
							onChangeText={(value) =>
								setFormData((prev) => ({ ...prev, password: value }))
							}
							secureTextEntry={!showPassword}
						/>
						<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
							<MaterialIcons
								name={showPassword ? "visibility" : "visibility-off"}
								size={20}
								color="#666"
							/>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						style={styles.button}
						onPress={handleLogin}
						disabled={isLoading}>
						<Text style={styles.buttonText}>
							{isLoading ? "Signing in..." : "Sign in"}
						</Text>
					</TouchableOpacity>

					<View style={styles.footer}>
						<Text style={styles.footerText}>New user? </Text>
						<TouchableOpacity onPress={() => navigation.navigate("Signup")}>
							<Text style={styles.link}>Sign up</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						onPress={() => navigation.navigate("ForgotPassword")}
						style={styles.forgotPassword}>
						<Text style={styles.link}>Forgot Password?</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	scrollContainer: {
		flexGrow: 1,
		justifyContent: "center",
		padding: 20,
	},
	formContainer: {
		width: "100%",
		maxWidth: 400,
		alignSelf: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "600",
		color: "#1a1a1a",
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 14,
		color: "#666",
		marginBottom: 24,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 8,
		paddingHorizontal: 12,
		marginBottom: 16,
		height: 48,
	},
	input: {
		flex: 1,
		marginLeft: 8,
		fontSize: 16,
	},
	button: {
		backgroundColor: "#007AFF",
		borderRadius: 8,
		height: 48,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 8,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600",
	},
	footer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 24,
	},
	footerText: {
		color: "#666",
		fontSize: 14,
	},
	link: {
		color: "#007AFF",
		fontSize: 14,
		fontWeight: "500",
	},
	forgotPassword: {
		alignSelf: "center",
		marginTop: 12,
	},
})
