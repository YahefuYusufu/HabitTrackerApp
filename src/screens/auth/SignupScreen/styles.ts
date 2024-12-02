// src/screens/auth/SignupScreen/styles.ts
import { StyleSheet } from "react-native"
import { colors, spacing } from "../../../theme"
import { isSmallDevice } from "../../../utils/dimensions"

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	content: {
		flex: 1,
		padding: isSmallDevice ? spacing.md : spacing.lg,
		justifyContent: "center",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		color: colors.primary,
		marginBottom: spacing.xs,
	},
	subtitle: {
		fontSize: 18,
		color: colors.textSecondary,
		marginBottom: spacing.xl,
	},
	form: {
		width: "100%",
	},
	input: {
		width: "100%",
		height: 42,
		borderWidth: 1,
		borderColor: colors.border,
		borderRadius: 8,
		marginBottom: spacing.md,
		paddingHorizontal: spacing.md,
		backgroundColor: "white",
	},
	// New styles for error handling
	inputError: {
		borderColor: colors.error,
	},
	errorText: {
		color: colors.error,
		fontSize: 12,
		marginTop: -spacing.sm,
		marginBottom: spacing.sm,
	},
	buttonDisabled: {
		opacity: 0.7,
	},
	// Existing styles
	signupButton: {
		width: "100%",
		backgroundColor: colors.primary,
		padding: spacing.md,
		borderRadius: 8,
		alignItems: "center",
		marginTop: spacing.sm,
	},
	signupButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "600",
	},
	loginContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: spacing.md,
	},
	loginText: {
		color: colors.textSecondary,
	},
	loginLink: {
		color: colors.primary,
		fontWeight: "600",
	},
})
