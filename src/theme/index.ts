export const spacing = {
	xs: 4,
	sm: 8,
	md: 16,
	lg: 24,
	xl: 32,
	xxl: 40,
} as const

export const colors = {
	primary: "#007AFF",
	secondary: "#5856D6",
	background: "#FFFFFF",
	text: "#000000",
	textSecondary: "#8E8E93",
	error: "#FF3B30",
	success: "#34C759",
	border: "#E5E5EA",
	gray: "#94A3B8",
	cardBackground: "#F8FAFC",
} as const

export const typography = {
	header: {
		fontSize: 24,
		fontWeight: "600" as const,
		lineHeight: 32,
	},
	subheader: {
		fontSize: 20,
		fontWeight: "500" as const,
		lineHeight: 28,
	},
	body: {
		fontSize: 16,
		fontWeight: "400" as const,
		lineHeight: 24,
	},
	caption: {
		fontSize: 14,
		fontWeight: "400" as const,
		lineHeight: 20,
	},
} as const
