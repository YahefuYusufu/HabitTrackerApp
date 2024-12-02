// src/navigation/index.tsx
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthNavigator from "./AuthNavigator"
import { RootStackParamList } from "../../types/navigation"

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = () => {
	const isAuthenticated = false // We'll implement auth state later

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{!isAuthenticated ? (
				<Stack.Screen name="Auth" component={AuthNavigator} />
			) : (
				<Stack.Screen
					name="TabNavigator"
					component={() => null} // We'll implement this later
				/>
			)}
		</Stack.Navigator>
	)
}

export const RootNavigator = () => {
	return (
		<NavigationContainer>
			<Navigation />
		</NavigationContainer>
	)
}
