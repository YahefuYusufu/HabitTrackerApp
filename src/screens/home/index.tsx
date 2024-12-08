import React from "react"
import { View, StyleSheet } from "react-native"
import { Text, Button } from "react-native-paper"
import { auth } from "@services/firebase/config"
import { signOut } from "firebase/auth"
import { Alert } from "react-native"

export const HomeScreen = () => {
	const handleLogout = async () => {
		try {
			await signOut(auth)
			// No need to handle navigation manually as the auth state change will trigger automatically
		} catch (error) {
			Alert.alert(
				"Error",
				error instanceof Error ? error.message : "Failed to logout"
			)
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text variant="titleLarge">Welcome!</Text>
				<Text variant="bodyLarge" style={styles.email}>
					Email: {auth.currentUser?.email}
				</Text>
			</View>

			<Button
				mode="contained"
				onPress={handleLogout}
				style={styles.logoutButton}>
				Logout
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	content: {
		flex: 1,
		justifyContent: "center",
	},
	email: {
		marginTop: 8,
	},
	logoutButton: {
		marginBottom: 16,
	},
})
