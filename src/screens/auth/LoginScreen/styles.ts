// src/screens/auth/LoginScreen/styles.ts
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
		marginBottom: spacing.sm,
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
		height: 48,
		borderWidth: 1,
		borderColor: colors.border,
		borderRadius: 8,
		marginBottom: spacing.sm,
		paddingHorizontal: spacing.md,
		backgroundColor: "white",
	},
	forgotPassword: {
		alignSelf: "flex-end",
		marginBottom: spacing.lg,
	},
	forgotPasswordText: {
		color: colors.primary,
		fontSize: 14,
	},
	loginButton: {
		width: "100%",
		backgroundColor: colors.primary,
		padding: spacing.md,
		borderRadius: 8,
		alignItems: "center",
	},
	loginButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "600",
	},
	signupContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: spacing.xl,
	},
	signupText: {
		color: colors.textSecondary,
	},
	signupLink: {
		color: colors.primary,
		fontWeight: "600",
	},

	inputError: {
		borderColor: colors.error,
	},
	errorText: {
		color: colors.error,
		fontSize: 12,
		marginTop: -spacing.sm,
		marginBottom: spacing.sm,
	},
	loginButtonDisabled: {
		opacity: 0.7,
	},
})
