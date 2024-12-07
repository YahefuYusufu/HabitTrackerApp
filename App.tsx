import React from "react"
import { RootNavigator } from "./src/navigator/RootNavigator"
import { PaperProvider } from "react-native-paper"
import { theme } from "./src/theme"
import { Provider } from "react-redux"
import { store } from "./src/store/store"

export default function App() {
	return (
		<Provider store={store}>
			<PaperProvider theme={theme}>
				<RootNavigator />
			</PaperProvider>
		</Provider>
	)
}
