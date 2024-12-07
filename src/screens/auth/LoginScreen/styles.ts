// src/screens/auth/LoginScreen/styles.ts
import { useCustomTheme } from "@hooks/useCustomTheme"
import { Platform, StyleSheet } from "react-native"

export const useStyles = () => {
	const theme = useCustomTheme()

	return StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: Platform.OS === "ios" ? 80 : 40,
		},
		content: {
			flex: 1,
			paddingHorizontal: theme.spacing.md,
			paddingBottom: theme.spacing.xl,
		},
		title: {
			fontSize: 32,
			fontWeight: "bold",
			color: theme.colors.primary,
			marginBottom: theme.spacing.sm,
		},
		subtitle: {
			fontSize: 18,
			color: theme.colors.secondary,
			marginBottom: theme.spacing.xl,
		},
		form: {
			width: "100%",
		},
		signupContainer: {
			flexDirection: "row",
			justifyContent: "center",
			marginTop: theme.spacing.xl,
		},
		signupText: {
			color: theme.colors.secondary,
		},
		signupLink: {
			color: theme.colors.primary,
			fontWeight: "600",
		},
	})
}
