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
} from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthStackParamList } from "../../types/navigation"
import { useAuth } from "../../hooks/useAuth"
import { useState } from "react"

type Props = NativeStackScreenProps<AuthStackParamList, "Login">

export const LoginScreen = ({ navigation }: Props) => {
	const { login, isLoading, error } = useAuth()
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})
	const [showPassword, setShowPassword] = useState(false)

	const handleLogin = () => {
		login({ email: formData.email, password: formData.password })
	}

	return (
		<Center flex={1} px={4}>
			<Box safeArea w="100%" maxW="290">
				<Heading size="lg" fontWeight="600" color="coolGray.800">
					Welcome Back
				</Heading>
				<Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
					Sign in to continue!
				</Heading>

				<VStack space={3} mt="5">
					{error && <Text color="red.500">{error}</Text>}

					<FormControl>
						<FormControl.Label>Email</FormControl.Label>
						<Input
							InputLeftElement={
								<Icon
									as={<MaterialIcons name="person" />}
									size={5}
									ml="2"
									color="muted.400"
								/>
							}
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
							InputRightElement={
								<IconButton
									icon={
										<Icon
											as={
												<MaterialIcons
													name={showPassword ? "visibility" : "visibility-off"}
												/>
											}
											size={5}
											mr="2"
											color="muted.400"
										/>
									}
									onPress={() => setShowPassword(!showPassword)}
								/>
							}
							value={formData.password}
							onChangeText={(value) =>
								setFormData((prev) => ({ ...prev, password: value }))
							}
							placeholder="Password"
						/>
					</FormControl>

					<Button
						isLoading={isLoading}
						onPress={handleLogin}
						mt="2"
						colorScheme="primary">
						Sign in
					</Button>

					<HStack mt="6" justifyContent="center">
						<Text fontSize="sm" color="coolGray.600">
							New user?{" "}
						</Text>
						<Link onPress={() => navigation.navigate("Signup")}>Sign up</Link>
					</HStack>

					<Link
						onPress={() => navigation.navigate("ForgotPassword")}
						alignSelf="center">
						Forgot Password?
					</Link>
				</VStack>
			</Box>
		</Center>
	)
}
