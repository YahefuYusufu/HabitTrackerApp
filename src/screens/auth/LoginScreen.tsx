import React, { useState } from "react"
import {
	Box,
	Text,
	Heading,
	VStack,
	FormControl,
	Input,
	Link,
	Button,
	HStack,
	Center,
	Pressable,
	Icon,
	IconButton,
	useColorMode,
} from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

type AuthStackParamList = {
	Login: undefined
	Register: undefined
	ForgotPassword: undefined
}

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, "Login">

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
	const [show, setShow] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const handleLogin = async () => {
		setIsLoading(true)
		// Firebase login logic will go here
		setIsLoading(false)
	}

	return (
		<Center flex={1} px={4}>
			<Box safeArea w="100%" maxW="290">
				<Heading
					size="lg"
					fontWeight="600"
					color="coolGray.800"
					_dark={{ color: "warmGray.50" }}>
					Welcome Back
				</Heading>

				<Heading
					mt="1"
					_dark={{ color: "warmGray.200" }}
					color="coolGray.600"
					fontWeight="medium"
					size="xs">
					Sign in to continue!
				</Heading>

				<VStack space={3} mt="5">
					<FormControl>
						<FormControl.Label>Email</FormControl.Label>
						<Input
							size="lg"
							value={email}
							onChangeText={setEmail}
							placeholder="example@email.com"
							keyboardType="email-address"
							autoCapitalize="none"
							InputLeftElement={
								<Icon
									as={<MaterialIcons name="email" />}
									size={5}
									ml="2"
									color="muted.400"
								/>
							}
						/>
					</FormControl>

					<FormControl>
						<FormControl.Label>Password</FormControl.Label>
						<Input
							size="lg"
							value={password}
							onChangeText={setPassword}
							type={show ? "text" : "password"}
							InputRightElement={
								<IconButton
									icon={
										<Icon
											as={
												<MaterialIcons
													name={show ? "visibility" : "visibility-off"}
												/>
											}
											size={5}
											mr="2"
											color="muted.400"
										/>
									}
									onPress={() => setShow(!show)}
								/>
							}
							placeholder="Enter your password"
						/>
					</FormControl>

					<Button
						mt="2"
						colorScheme="primary"
						onPress={handleLogin}
						isLoading={isLoading}
						isLoadingText="Signing in">
						Sign in
					</Button>

					<HStack mt="6" justifyContent="center">
						<Text
							fontSize="sm"
							color="coolGray.600"
							_dark={{ color: "warmGray.200" }}>
							Don't have an account?{" "}
						</Text>
						<Link
							_text={{
								color: "primary.500",
								fontWeight: "medium",
								fontSize: "sm",
							}}
							onPress={() => navigation.navigate("Register")}>
							Sign up
						</Link>
					</HStack>

					<Link
						_text={{
							fontSize: "sm",
							fontWeight: "500",
							color: "primary.500",
						}}
						alignSelf="center"
						mt="1"
						onPress={() => navigation.navigate("ForgotPassword")}>
						Forgot Password?
					</Link>
				</VStack>
			</Box>
		</Center>
	)
}

export default LoginScreen
