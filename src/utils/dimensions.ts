import { Dimensions, StyleSheet } from "react-native"
import { spacing } from "../theme"

const { width, height } = Dimensions.get("window")

export const isSmallDevice = width < 375
export const screenWidth = width
export const screenHeight = height

// Usage in styles
const styles = StyleSheet.create({
	container: {
		padding: isSmallDevice ? spacing.sm : spacing.md,
	},
	image: {
		width: screenWidth * 0.8,
		height: screenWidth * 0.8,
	},
})
