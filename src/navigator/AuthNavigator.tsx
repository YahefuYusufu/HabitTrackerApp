import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen, SignupScreen, ForgotPasswordScreen } from "@screens/auth"
import { AuthStackParamList } from "../types/navigation"

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: "white" },
			}}>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Signup" component={SignupScreen} />
			<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
		</Stack.Navigator>
	)
}

export default AuthNavigator
