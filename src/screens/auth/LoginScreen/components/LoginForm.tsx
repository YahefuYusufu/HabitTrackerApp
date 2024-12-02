// src/screens/auth/LoginScreen/components/LoginForm.tsx
import React from "react"
import {
	View,
	TextInput,
	TouchableOpacity,
	Text,
	ActivityIndicator,
} from "react-native"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, LoginFormData } from "../../types"
import { styles } from "../styles"
import { colors } from "theme"

type LoginFormProps = {
	onSubmit: (data: LoginFormData) => void
	onForgotPassword: () => void
	isLoading: boolean
}

export const LoginForm = ({
	onSubmit,
	onForgotPassword,
	isLoading,
}: LoginFormProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	})

	return (
		<View style={styles.form}>
			<Controller
				control={control}
				name="email"
				render={({ field: { onChange, value } }) => (
					<>
						<TextInput
							placeholder="Email"
							style={[styles.input, errors.email && styles.inputError]}
							keyboardType="email-address"
							autoCapitalize="none"
							onChangeText={onChange}
							value={value}
							editable={!isLoading}
						/>
						{errors.email && (
							<Text style={styles.errorText}>{errors.email.message}</Text>
						)}
					</>
				)}
			/>

			<Controller
				control={control}
				name="password"
				render={({ field: { onChange, value } }) => (
					<>
						<TextInput
							placeholder="Password"
							style={[styles.input, errors.password && styles.inputError]}
							secureTextEntry
							onChangeText={onChange}
							value={value}
							editable={!isLoading}
						/>
						{errors.password && (
							<Text style={styles.errorText}>{errors.password.message}</Text>
						)}
					</>
				)}
			/>

			<TouchableOpacity
				onPress={onForgotPassword}
				style={styles.forgotPassword}
				disabled={isLoading}>
				<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
				onPress={handleSubmit(onSubmit)}
				disabled={isLoading}>
				{isLoading ? (
					<ActivityIndicator color="white" />
				) : (
					<Text style={styles.loginButtonText}>Login</Text>
				)}
			</TouchableOpacity>
		</View>
	)
}
