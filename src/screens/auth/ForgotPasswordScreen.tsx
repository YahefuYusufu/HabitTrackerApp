import React from "react"

import { MaterialIcons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthStackParamList } from "../../types/navigation"
import { useState } from "react"
import { View, Text } from "react-native"

type Props = NativeStackScreenProps<AuthStackParamList, "ForgotPassword">

export const ForgotPasswordScreen = ({ navigation }: Props) => {
	const [email, setEmail] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const handleReset = async () => {
		setIsLoading(true)
		// Reset logic will go here
		setIsLoading(false)
	}

	return (
		<View>
			<Text>ForgotPasswordScreen</Text>
		</View>
	)
}
