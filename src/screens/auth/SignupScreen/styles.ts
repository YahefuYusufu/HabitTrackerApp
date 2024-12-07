import { Platform, StyleSheet } from "react-native"
import { useCustomTheme } from "@hooks/useCustomTheme"

export const useStyles = () => {
	const theme = useCustomTheme()

	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.background,
		},
		scrollContent: {
			flexGrow: 1,
			paddingTop: Platform.OS === "ios" ? 60 : 40,
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
		loginContainer: {
			flexDirection: "row",
			justifyContent: "center",
			marginTop: theme.spacing.xl,
		},
		loginText: {
			color: theme.colors.secondary,
		},
		loginLink: {
			color: theme.colors.primary,
			fontWeight: "600",
		},
	})
}
