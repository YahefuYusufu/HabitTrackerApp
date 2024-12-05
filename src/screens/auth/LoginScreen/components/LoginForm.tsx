import React, { useState } from "react"
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
import { ValidationContainer } from "../../../../components/common/ValidationContainer"
import { ValidationRequirement } from "../../../../components/common/ValidationRequirement"
import { validateEmail, validatePassword } from "../../../../utils/validation"

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
	const [showEmailRequirements, setShowEmailRequirements] = useState(false)
	const [showPasswordRequirements, setShowPasswordRequirements] =
		useState(false)

	const { control, handleSubmit, watch } = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	})

	const watchEmail = watch("email", "")
	const watchPassword = watch("password", "")

	const emailRequirements = validateEmail(watchEmail)
	const passwordRequirements = validatePassword(watchPassword)

	const isEmailValid = Object.values(emailRequirements).every(Boolean)
	const isPasswordValid = Object.values(passwordRequirements).every(Boolean)

	return (
		<View style={styles.form}>
			<Controller
				control={control}
				name="email"
				render={({ field: { onChange, value } }) => (
					<View>
						<TextInput
							placeholder="Email"
							style={[
								styles.input,
								isEmailValid &&
									value && {
										borderColor: colors.success || "#22C55E",
										borderWidth: 1.5,
									},
							]}
							keyboardType="email-address"
							autoCapitalize="none"
							onChangeText={onChange}
							value={value}
							editable={!isLoading}
							onFocus={() => setShowEmailRequirements(true)}
							onBlur={() => setShowEmailRequirements(false)}
						/>
						{showEmailRequirements && (
							<ValidationContainer>
								<ValidationRequirement
									text="Valid email format"
									isMet={emailRequirements.isEmail}
									delay={100}
								/>
								<ValidationRequirement
									text="Email is not empty"
									isMet={emailRequirements.notEmpty}
									delay={200}
								/>
							</ValidationContainer>
						)}
					</View>
				)}
			/>

			<Controller
				control={control}
				name="password"
				render={({ field: { onChange, value } }) => (
					<View>
						<TextInput
							placeholder="Password"
							style={[
								styles.input,
								isPasswordValid &&
									value && {
										borderColor: colors.success || "#22C55E",
										borderWidth: 1.5,
									},
							]}
							secureTextEntry
							onChangeText={onChange}
							value={value}
							editable={!isLoading}
							onFocus={() => setShowPasswordRequirements(true)}
							onBlur={() => setShowPasswordRequirements(false)}
						/>
						{showPasswordRequirements && (
							<ValidationContainer>
								<ValidationRequirement
									text="At least 8 characters"
									isMet={passwordRequirements.minLength}
									delay={100}
								/>
								<ValidationRequirement
									text="At least one uppercase letter"
									isMet={passwordRequirements.hasUppercase}
									delay={200}
								/>
								<ValidationRequirement
									text="At least one special character"
									isMet={passwordRequirements.hasSpecialChar}
									delay={300}
								/>
								<ValidationRequirement
									text="At least one number"
									isMet={passwordRequirements.hasNumber}
									delay={400}
								/>
							</ValidationContainer>
						)}
					</View>
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
