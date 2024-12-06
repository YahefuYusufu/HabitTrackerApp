// src/screens/auth/ForgotPasswordScreen/components/ForgotPasswordForm.tsx
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
import { forgotPasswordSchema, ForgotPasswordFormData } from "../../types"
import { styles } from "../styles"
import { colors } from "theme"
import { ValidationContainer } from "../../../../components/common/ValidationContainer"
import { ValidationRequirement } from "../../../../components/common/ValidationRequirement"
import { validateEmail } from "../../../../utils/validation"

type ForgotPasswordFormProps = {
	onSubmit: (data: ForgotPasswordFormData) => void
	isLoading: boolean
}

export const ForgotPasswordForm = ({
	onSubmit,
	isLoading,
}: ForgotPasswordFormProps) => {
	const [showEmailRequirements, setShowEmailRequirements] = useState(false)

	const { control, handleSubmit, watch } = useForm<ForgotPasswordFormData>({
		resolver: zodResolver(forgotPasswordSchema),
	})

	const watchEmail = watch("email", "")
	const emailRequirements = validateEmail(watchEmail)
	const isEmailValid = Object.values(emailRequirements).every(Boolean)

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

			<TouchableOpacity
				style={[styles.resetButton, isLoading && styles.buttonDisabled]}
				onPress={handleSubmit(onSubmit)}
				disabled={isLoading}>
				{isLoading ? (
					<ActivityIndicator color="white" />
				) : (
					<Text style={styles.resetButtonText}>Send Reset Link</Text>
				)}
			</TouchableOpacity>
		</View>
	)
}
