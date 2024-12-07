import React from "react"
import Animated, {
	FadeInDown,
	FadeOutUp,
	Layout,
} from "react-native-reanimated"
import { useCustomTheme } from "@hooks/useCustomTheme"

type ValidationContainerProps = {
	children: React.ReactNode
}

export const ValidationContainer = ({ children }: ValidationContainerProps) => {
	const theme = useCustomTheme()

	return (
		<Animated.View
			entering={FadeInDown.duration(400).springify()}
			exiting={FadeOutUp.duration(300)}
			layout={Layout.springify().damping(14)}
			style={{
				backgroundColor: theme.colors.surface,
				borderRadius: theme.roundness,
				paddingVertical: theme.spacing.xs,
				marginTop: theme.spacing.xs,
				...theme.elevation.level1,
			}}>
			{children}
		</Animated.View>
	)
}
