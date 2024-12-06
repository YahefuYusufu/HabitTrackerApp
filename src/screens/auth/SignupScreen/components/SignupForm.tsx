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
import { signupSchema, SignupFormData } from "../../types"
import { styles } from "../styles"
import { colors } from "@theme/index"
import { ValidationContainer } from "@components/common/ValidationContainer"
import { ValidationRequirement } from "@components/common/ValidationRequirement"
import {
	validateEmail,
	validatePassword,
	validateFullName,
	validateConfirmPassword,
} from "@utils/validation"

type SignupFormProps = {
	onSubmit: (data: SignupFormData) => void
	isLoading: boolean
}

export const SignupForm = ({ onSubmit, isLoading }: SignupFormProps) => {
	const [showFullNameRequirements, setShowFullNameRequirements] =
		useState(false)
	const [showEmailRequirements, setShowEmailRequirements] = useState(false)
	const [showPasswordRequirements, setShowPasswordRequirements] =
		useState(false)
	const [showConfirmPasswordRequirements, setShowConfirmPasswordRequirements] =
		useState(false)

	const { control, handleSubmit, watch } = useForm<SignupFormData>({
		resolver: zodResolver(signupSchema),
	})

	const watchName = watch("fullName", "")
	const watchEmail = watch("email", "")
	const watchPassword = watch("password", "")
	const watchConfirmPassword = watch("confirmPassword", "")

	const nameRequirements = validateFullName(watchName)
	const emailRequirements = validateEmail(watchEmail)
	const passwordRequirements = validatePassword(watchPassword)
	const confirmPasswordRequirements = validateConfirmPassword(
		watchPassword,
		watchConfirmPassword
	)

	const isNameValid = Object.values(nameRequirements).every(Boolean)
	const isEmailValid = Object.values(emailRequirements).every(Boolean)
	const isPasswordValid = Object.values(passwordRequirements).every(Boolean)
	const isConfirmPasswordValid = Object.values(
		confirmPasswordRequirements
	).every(Boolean)

	return (
		<View style={styles.form}>
			<Controller
				control={control}
				name="fullName"
				render={({ field: { onChange, value } }) => (
					<View>
						<TextInput
							placeholder="Full Name"
							style={[
								styles.input,
								isNameValid &&
									value && {
										borderColor: colors.success || "#22C55E",
										borderWidth: 1.5,
									},
							]}
							autoCapitalize="words"
							onChangeText={onChange}
							value={value}
							editable={!isLoading}
							onFocus={() => setShowFullNameRequirements(true)}
							onBlur={() => setShowFullNameRequirements(false)}
						/>
						{showFullNameRequirements && (
							<ValidationContainer>
								<ValidationRequirement
									text="At least 2 characters"
									isMet={nameRequirements.minLength}
									delay={100}
								/>
								<ValidationRequirement
									text="Maximum 50 characters"
									isMet={nameRequirements.maxLength}
									delay={200}
								/>
							</ValidationContainer>
						)}
					</View>
				)}
			/>

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

			<Controller
				control={control}
				name="confirmPassword"
				render={({ field: { onChange, value } }) => (
					<View>
						<TextInput
							placeholder="Confirm Password"
							style={[
								styles.input,
								isConfirmPasswordValid &&
									value && {
										borderColor: colors.success || "#22C55E",
										borderWidth: 1.5,
									},
							]}
							secureTextEntry
							onChangeText={onChange}
							value={value}
							editable={!isLoading}
							onFocus={() => setShowConfirmPasswordRequirements(true)}
							onBlur={() => setShowConfirmPasswordRequirements(false)}
						/>
						{showConfirmPasswordRequirements && (
							<ValidationContainer>
								<ValidationRequirement
									text="Passwords match"
									isMet={confirmPasswordRequirements.matches}
									delay={100}
								/>
							</ValidationContainer>
						)}
					</View>
				)}
			/>

			<TouchableOpacity
				style={[styles.signupButton, isLoading && styles.buttonDisabled]}
				onPress={handleSubmit(onSubmit)}
				disabled={isLoading}>
				{isLoading ? (
					<ActivityIndicator color="white" />
				) : (
					<Text style={styles.signupButtonText}>Sign Up</Text>
				)}
			</TouchableOpacity>
		</View>
	)
}
