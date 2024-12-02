import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "src/app/Navigator/AuthNavigator"

export default function App() {
	return (
		<NavigationContainer>
			<AuthNavigator />
		</NavigationContainer>
	)
}
