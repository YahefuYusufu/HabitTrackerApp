// src/screens/auth/SignupScreen/components/SignupForm.tsx
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
import { signupSchema, SignupFormData } from "../../types"
import { styles } from "../styles"

type SignupFormProps = {
	onSubmit: (data: SignupFormData) => void
	isLoading: boolean
}

export const SignupForm = ({ onSubmit, isLoading }: SignupFormProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupFormData>({
		resolver: zodResolver(signupSchema),
	})

	return (
		<View style={styles.form}>
			<Controller
				control={control}
				name="fullName"
				render={({ field: { onChange, value } }) => (
					<>
						<TextInput
							placeholder="Full Name"
							style={[styles.input, errors.fullName && styles.inputError]}
							autoCapitalize="words"
							onChangeText={onChange}
							value={value}
							editable={!isLoading}
						/>
						{errors.fullName && (
							<Text style={styles.errorText}>{errors.fullName.message}</Text>
						)}
					</>
				)}
			/>

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

			<Controller
				control={control}
				name="confirmPassword"
				render={({ field: { onChange, value } }) => (
					<>
						<TextInput
							placeholder="Confirm Password"
							style={[
								styles.input,
								errors.confirmPassword && styles.inputError,
							]}
							secureTextEntry
							onChangeText={onChange}
							value={value}
							editable={!isLoading}
						/>
						{errors.confirmPassword && (
							<Text style={styles.errorText}>
								{errors.confirmPassword.message}
							</Text>
						)}
					</>
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
