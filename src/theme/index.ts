// src/theme/index.ts
import { MD3LightTheme, type MD3Theme } from "react-native-paper"

export const theme = {
	...MD3LightTheme,
	colors: {
		...MD3LightTheme.colors,
		primary: "#4361EE",
		secondary: "#62657D",
		background: "#E8ECF1",
		surface: "#FFFFFF",
		error: "#FF4D4D",
		success: "#22C55E", // Add success here
		text: "#1A1A1A",
		textSecondary: "#94A3B8",
		disabled: "#9E9E9E",
		placeholder: "#BDBDBD",
		border: "#E0E0E0",
		notification: "#FF4D4D",
	},
	spacing: {
		xs: 4,
		sm: 8,
		md: 16,
		lg: 24,
		xl: 32,
		xxl: 48,
	},
	roundness: 8,
	fonts: MD3LightTheme.fonts,
	animation: {
		scale: 1.0,
	},

	// Ensure mode is correct
	mode: "exact" as const,
	elevation: {
		level0: {
			shadowColor: "transparent",
			shadowOffset: { width: 0, height: 0 },
			shadowOpacity: 0,
			shadowRadius: 0,
			elevation: 0,
		},
		level1: {
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.15,
			shadowRadius: 3.84,
			elevation: 3,
		},
		level2: {
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 4 },
			shadowOpacity: 0.25,
			shadowRadius: 5.84,
			elevation: 5,
		},
	},
}
