// src/styles/common.ts
import { StyleSheet } from "react-native"
import { colors, spacing } from "../theme"

export const commonStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		padding: spacing.md,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
	shadow: {
		shadowColor: colors.text,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
})
