// src/navigation/index.tsx
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthNavigator from "./AuthNavigator"
import { RootStackParamList } from "../types/navigation"
import { MainNavigator } from "./MainNavigator"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "@firebase/auth"
import { auth } from "@services/firebase/config"
import LoadingScreen from "@components/common/LoadingScreen"

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

	useEffect(() => {
		// Subscribe to auth state changes
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setIsAuthenticated(!!user)
		})

		// Cleanup subscription on unmount
		return () => unsubscribe()
	}, [])

	// Show loading state while checking authentication
	if (isAuthenticated === null) {
		return <LoadingScreen />
	}

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{!isAuthenticated ? (
					<Stack.Screen name="Auth" component={AuthNavigator} />
				) : (
					<Stack.Screen name="Main" component={MainNavigator} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
