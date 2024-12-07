import React, { useState } from "react"
import { View } from "react-native"
import { TextInput, Button } from "react-native-paper"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, LoginFormData } from "../../types"
import { ValidationContainer } from "@components/common/ValidationContainer"
import { ValidationRequirement } from "@components/common/ValidationRequirement"
import { validateEmail, validatePassword } from "@utils/validation"
import { useCustomTheme } from "@hooks/useCustomTheme"

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
	const theme = useCustomTheme()
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
		<View style={{ gap: theme.spacing.md }}>
			<Controller
				control={control}
				name="email"
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<View>
						<TextInput
							mode="outlined"
							label="Email"
							placeholder="Enter your email"
							keyboardType="email-address"
							autoCapitalize="none"
							value={value}
							onChangeText={onChange}
							error={!!error}
							disabled={isLoading}
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
							placeholder="Enter your password"
							secureTextEntry
							value={value}
							onChangeText={onChange}
							error={!!error}
							disabled={isLoading}
							onFocus={() => setShowPasswordRequirements(true)}
							onBlur={() => setShowPasswordRequirements(false)}
							right={
								isPasswordValid && value ? (
									<TextInput.Icon icon="check" />
								) : null
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

			<Button
				mode="text"
				onPress={onForgotPassword}
				disabled={isLoading}
				style={{ alignSelf: "flex-end" }}>
				Forgot Password?
			</Button>

			<Button
				mode="contained"
				onPress={handleSubmit(onSubmit)}
				disabled={isLoading}
				loading={isLoading}>
				Login
			</Button>
		</View>
	)
}
