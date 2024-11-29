import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "src/app/Navigator/AuthNavigator"
import { TamaguiProvider } from "tamagui"
import config from "tamagui.config"

export default function App() {
	return (
		<TamaguiProvider config={config}>
			<NavigationContainer>
				<AuthNavigator />
			</NavigationContainer>
		</TamaguiProvider>
	)
}
