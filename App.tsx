import React from "react"
import { RootNavigator } from "@navigator/RootNavigator"
import { PaperProvider } from "react-native-paper"
import { theme } from "@theme/index"

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<RootNavigator />
		</PaperProvider>
	)
}
