import React from "react"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthStackParamList } from "../../types/navigation"
import { useAuth } from "../../hooks/useAuth"
import { useState } from "react"
import { Text, View } from "react-native"

type Props = NativeStackScreenProps<AuthStackParamList, "Signup">

export const SignupScreen = ({ navigation }: Props) => {
	const { signup, isLoading, error } = useAuth()
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	})
	const [showPassword, setShowPassword] = useState(false)
	const [acceptTerms, setAcceptTerms] = useState(false)

	const handleSignup = () => {
		if (formData.password !== formData.confirmPassword) {
			return
		}
		signup({
			email: formData.email,
			password: formData.password,
			name: formData.name,
		})
	}

	return (
		<View>
			<Text>SignupScreen</Text>
		</View>
	)
}
