// src/navigation/MainNavigator.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "@screens/home"
import type { MainStackParamList } from "../types/navigation"

const Stack = createNativeStackNavigator<MainStackParamList>()

export const MainNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	)
}
