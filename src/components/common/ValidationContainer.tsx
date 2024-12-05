import React from "react"
import Animated, {
	FadeInDown,
	FadeOutUp,
	Layout,
} from "react-native-reanimated"
import { colors } from "theme"

type ValidationContainerProps = {
	children: React.ReactNode
}

export const ValidationContainer = ({ children }: ValidationContainerProps) => (
	<Animated.View
		entering={FadeInDown.duration(400).springify()}
		exiting={FadeOutUp.duration(300)}
		layout={Layout.springify().damping(14)}
		style={{
			backgroundColor: colors.cardBackground || "#F8FAFC",
			borderRadius: 12,
			paddingVertical: 2,
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.05,
			shadowRadius: 3,
			elevation: 2,
		}}>
		{children}
	</Animated.View>
)
