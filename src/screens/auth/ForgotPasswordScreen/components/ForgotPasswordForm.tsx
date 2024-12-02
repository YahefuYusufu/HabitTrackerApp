// src/screens/auth/ForgotPasswordScreen/components/ForgotPasswordForm.tsx
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
import { forgotPasswordSchema, ForgotPasswordFormData } from "../../types"
import { styles } from "../styles"

type ForgotPasswordFormProps = {
	onSubmit: (data: ForgotPasswordFormData) => void
	isLoading: boolean
}

export const ForgotPasswordForm = ({
	onSubmit,
	isLoading,
}: ForgotPasswordFormProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ForgotPasswordFormData>({
		resolver: zodResolver(forgotPasswordSchema),
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
