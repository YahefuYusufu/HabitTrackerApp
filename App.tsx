import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider, extendTheme } from "native-base"
import AuthNavigator from "src/app/Navigator/AuthNavigator"

// Optional: Create custom theme
const theme = extendTheme({
	config: {
		initialColorMode: "dark",
	},
})

export default function App() {
	return (
		<NativeBaseProvider theme={theme}>
			<NavigationContainer>
				<AuthNavigator />
			</NavigationContainer>
		</NativeBaseProvider>
	)
}
