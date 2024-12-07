import { MD3Theme } from "react-native-paper"

export interface CustomTheme extends MD3Theme {
	colors: {
		primary: string
		secondary: string
		background: string
		surface: string
		error: string
		success: string
		text: string
		textSecondary: string
		disabled: string
		placeholder: string
		border: string
		notification: string
	}
	spacing: {
		xs: number
		sm: number
		md: number
		lg: number
		xl: number
		xxl: number
	}
	elevation: {
		level0: {
			shadowColor: string
			shadowOffset: {
				width: number
				height: number
			}
			shadowOpacity: number
			shadowRadius: number
			elevation: number
		}
		level1: {
			shadowColor: string
			shadowOffset: {
				width: number
				height: number
			}
			shadowOpacity: number
			shadowRadius: number
			elevation: number
		}
		level2: {
			shadowColor: string
			shadowOffset: {
				width: number
				height: number
			}
			shadowOpacity: number
			shadowRadius: number
			elevation: number
		}
	}
}
