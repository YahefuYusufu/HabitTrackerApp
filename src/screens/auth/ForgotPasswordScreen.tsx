import React from "react"
import {
	Box,
	Text,
	Heading,
	VStack,
	FormControl,
	Input,
	Button,
	Center,
	Icon,
} from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthStackParamList } from "../../types/navigation"
import { useState } from "react"

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
		<Center flex={1} px={4}>
			<Box safeArea w="100%" maxW="290">
				<Heading size="lg" fontWeight="600" color="coolGray.800">
					Reset Password
				</Heading>
				<Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
					Enter your email to receive reset instructions
				</Heading>

				<VStack space={3} mt="5">
					<FormControl>
						<FormControl.Label>Email</FormControl.Label>
						<Input
							InputLeftElement={
								<Icon
									as={<MaterialIcons name="email" />}
									size={5}
									ml="2"
									color="muted.400"
								/>
							}
							value={email}
							onChangeText={setEmail}
							placeholder="email@example.com"
						/>
					</FormControl>

					<Button
						isLoading={isLoading}
						onPress={handleReset}
						mt="2"
						colorScheme="primary">
						Send Reset Link
					</Button>

					<Button variant="ghost" onPress={() => navigation.goBack()}>
						Back to Login
					</Button>
				</VStack>
			</Box>
		</Center>
	)
}
