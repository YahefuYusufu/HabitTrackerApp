// App.tsx
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NativeBaseProvider, extendTheme } from "native-base"
import LoginScreen from "./src/screens/auth/LoginScreen"

// Optional: Create custom theme
const theme = extendTheme({
	config: {
		initialColorMode: "dark",
	},
})

export type AuthStackParamList = {
	Login: undefined
	Register: undefined
	ForgotPassword: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function App() {
	return (
		<NativeBaseProvider theme={theme}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}>
					<Stack.Screen name="Login" component={LoginScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	)
}
