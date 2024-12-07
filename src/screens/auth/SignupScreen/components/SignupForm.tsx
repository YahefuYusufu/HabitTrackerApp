import React, { useState } from "react"
import { View } from "react-native"
import { TextInput, Button, useTheme } from "react-native-paper"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema, SignupFormData } from "../../types"
import { ValidationContainer } from "@components/common/ValidationContainer"
import { ValidationRequirement } from "@components/common/ValidationRequirement"
import {
	validateEmail,
	validatePassword,
	validateFullName,
	validateConfirmPassword,
} from "@utils/validation"
import { useCustomTheme } from "@hooks/useCustomTheme"

type SignupFormProps = {
	onSubmit: (data: SignupFormData) => void
	isLoading: boolean
}

export const SignupForm = ({ onSubmit, isLoading }: SignupFormProps) => {
	const theme = useCustomTheme()
	const [showFullNameRequirements, setShowFullNameRequirements] =
		useState(false)
	const [showEmailRequirements, setShowEmailRequirements] = useState(false)
	const [showPasswordRequirements, setShowPasswordRequirements] =
		useState(false)
	const [showConfirmPasswordRequirements, setShowConfirmPasswordRequirements] =
		useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
		<View style={{ gap: theme.spacing.md }}>
			<Controller
				control={control}
				name="fullName"
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<View>
						<TextInput
							mode="outlined"
							label="Full Name"
							value={value}
							onChangeText={onChange}
							error={!!error}
							disabled={isLoading}
							autoCapitalize="words"
							onFocus={() => setShowFullNameRequirements(true)}
							onBlur={() => setShowFullNameRequirements(false)}
							right={
								isNameValid && value ? <TextInput.Icon icon="check" /> : null
							}
							outlineStyle={{
								borderColor:
									isNameValid && value ? theme.colors.success : undefined,
							}}
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
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<View>
						<TextInput
							mode="outlined"
							label="Email"
							value={value}
							onChangeText={onChange}
							error={!!error}
							disabled={isLoading}
							keyboardType="email-address"
							autoCapitalize="none"
							onFocus={() => setShowEmailRequirements(true)}
							onBlur={() => setShowEmailRequirements(false)}
							right={
								isEmailValid && value ? <TextInput.Icon icon="check" /> : null
							}
							outlineStyle={{
								borderColor:
									isEmailValid && value ? theme.colors.success : undefined,
							}}
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
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<View>
						<TextInput
							mode="outlined"
							label="Password"
							value={value}
							onChangeText={onChange}
							error={!!error}
							disabled={isLoading}
							secureTextEntry={!showPassword}
							onFocus={() => setShowPasswordRequirements(true)}
							onBlur={() => setShowPasswordRequirements(false)}
							right={
								<TextInput.Icon
									icon={showPassword ? "eye-off" : "eye"}
									onPress={() => setShowPassword(!showPassword)}
								/>
							}
							outlineStyle={{
								borderColor:
									isPasswordValid && value ? theme.colors.success : undefined,
							}}
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
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<View>
						<TextInput
							mode="outlined"
							label="Confirm Password"
							value={value}
							onChangeText={onChange}
							error={!!error}
							disabled={isLoading}
							secureTextEntry={!showConfirmPassword}
							onFocus={() => setShowConfirmPasswordRequirements(true)}
							onBlur={() => setShowConfirmPasswordRequirements(false)}
							right={
								<TextInput.Icon
									icon={showConfirmPassword ? "eye-off" : "eye"}
									onPress={() => setShowConfirmPassword(!showConfirmPassword)}
								/>
							}
							outlineStyle={{
								borderColor:
									isConfirmPasswordValid && value
										? theme.colors.success
										: undefined,
							}}
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

			<Button
				mode="contained"
				onPress={handleSubmit(onSubmit)}
				disabled={isLoading}
				loading={isLoading}
				style={{ marginTop: theme.spacing.md }}>
				Sign Up
			</Button>
		</View>
	)
}
