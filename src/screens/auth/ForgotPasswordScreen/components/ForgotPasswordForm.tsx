import React, { useState } from "react"
import { View } from "react-native"
import { TextInput, Button } from "react-native-paper"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { forgotPasswordSchema, ForgotPasswordFormData } from "../../types"
import { ValidationContainer } from "@components/common/ValidationContainer"
import { ValidationRequirement } from "@components/common/ValidationRequirement"
import { validateEmail } from "@utils/validation"
import { useCustomTheme } from "@hooks/useCustomTheme"

type ForgotPasswordFormProps = {
	onSubmit: (data: ForgotPasswordFormData) => void
	isLoading: boolean
}

export const ForgotPasswordForm = ({
	onSubmit,
	isLoading,
}: ForgotPasswordFormProps) => {
	const theme = useCustomTheme()
	const [showEmailRequirements, setShowEmailRequirements] = useState(false)

	const { control, handleSubmit, watch } = useForm<ForgotPasswordFormData>({
		resolver: zodResolver(forgotPasswordSchema),
	})

	const watchEmail = watch("email", "")
	const emailRequirements = validateEmail(watchEmail)
	const isEmailValid = Object.values(emailRequirements).every(Boolean)

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

			<Button
				mode="contained"
				onPress={handleSubmit(onSubmit)}
				disabled={isLoading}
				loading={isLoading}
				style={{ marginTop: theme.spacing.md }}>
				Send Reset Link
			</Button>
		</View>
	)
}
