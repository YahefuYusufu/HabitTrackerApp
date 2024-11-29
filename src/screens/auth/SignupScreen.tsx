import React from "react"
import {
	Box,
	Text,
	Heading,
	VStack,
	FormControl,
	Input,
	Button,
	HStack,
	Center,
	Icon,
	IconButton,
	Link,
	Checkbox,
} from "native-base"

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthStackParamList } from "../../types/navigation"
import { useAuth } from "../../hooks/useAuth"
import { useState } from "react"

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
		<Center flex={1} px={4}>
			<Box safeArea w="100%" maxW="290">
				<Heading size="lg" fontWeight="600" color="coolGray.800">
					Create Account
				</Heading>
				<Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
					Sign up to get started!
				</Heading>

				<VStack space={3} mt="5">
					{error && <Text color="red.500">{error}</Text>}

					<FormControl>
						<FormControl.Label>Name</FormControl.Label>
						<Input
							value={formData.name}
							onChangeText={(value) =>
								setFormData((prev) => ({ ...prev, name: value }))
							}
							placeholder="Full name"
						/>
					</FormControl>

					<FormControl>
						<FormControl.Label>Email</FormControl.Label>
						<Input
							value={formData.email}
							onChangeText={(value) =>
								setFormData((prev) => ({ ...prev, email: value }))
							}
							placeholder="email@example.com"
						/>
					</FormControl>

					<FormControl>
						<FormControl.Label>Password</FormControl.Label>
						<Input
							type={showPassword ? "text" : "password"}
							value={formData.password}
							onChangeText={(value) =>
								setFormData((prev) => ({ ...prev, password: value }))
							}
							placeholder="Password"
						/>
					</FormControl>

					<FormControl>
						<FormControl.Label>Confirm Password</FormControl.Label>
						<Input
							type={showPassword ? "text" : "password"}
							value={formData.confirmPassword}
							onChangeText={(value) =>
								setFormData((prev) => ({ ...prev, confirmPassword: value }))
							}
							placeholder="Confirm password"
						/>
					</FormControl>

					<Checkbox value="terms" onChange={setAcceptTerms}>
						I accept the terms and conditions
					</Checkbox>

					<Button
						isLoading={isLoading}
						onPress={handleSignup}
						mt="2"
						colorScheme="primary"
						isDisabled={!acceptTerms}>
						Sign up
					</Button>

					<HStack mt="6" justifyContent="center">
						<Text fontSize="sm" color="coolGray.600">
							Already have an account?{" "}
						</Text>
						<Link onPress={() => navigation.navigate("Login")}>Sign in</Link>
					</HStack>
				</VStack>
			</Box>
		</Center>
	)
}
