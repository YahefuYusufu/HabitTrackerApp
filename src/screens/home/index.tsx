// src/screens/home/index.tsx
import React from "react"
import { View } from "react-native"
import { Text } from "react-native-paper"
import { auth } from "@services/firebase/config"

export const HomeScreen = () => {
	return (
		<View style={{ flex: 1, padding: 16, justifyContent: "center" }}>
			<Text variant="titleLarge">Welcome!</Text>
			<Text variant="bodyLarge" style={{ marginTop: 8 }}>
				Email: {auth.currentUser?.email}
			</Text>
		</View>
	)
}
