// src/screens/auth/ForgotPasswordScreen/styles.ts
import { StyleSheet } from "react-native"
import { useCustomTheme } from "@hooks/useCustomTheme"

export const useStyles = () => {
	const theme = useCustomTheme()

	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.background,
		},
		content: {
			flex: 1,
			padding: theme.spacing.md,
			justifyContent: "center",
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
		backToLogin: {
			marginTop: theme.spacing.xl,
			alignItems: "center",
		},
	})
}
