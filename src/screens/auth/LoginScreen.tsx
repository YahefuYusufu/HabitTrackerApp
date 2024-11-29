import { AuthStackParamList } from "src/types/navigation"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { useState } from "react"
import { Text, View } from "react-native"

type Props = NativeStackScreenProps<AuthStackParamList, "Login">

export const LoginScreen = ({ navigation }: Props) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})
	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	return (
		<View>
			<Text>LoginScreen</Text>
		</View>
	)
}
