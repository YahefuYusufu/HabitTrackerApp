import React from "react"
import { Text } from "react-native-paper"
import Animated, {
	useAnimatedStyle,
	withSpring,
	useSharedValue,
	withTiming,
	Easing,
} from "react-native-reanimated"
import { useCustomTheme } from "@hooks/useCustomTheme"
import { View } from "react-native"

type ValidationRequirementProps = {
	text: string
	isMet: boolean
	delay?: number
}

export const ValidationRequirement = ({
	text,
	isMet,
	delay = 0,
}: ValidationRequirementProps) => {
	const theme = useCustomTheme()
	const progress = useSharedValue(0)

	React.useEffect(() => {
		const timeoutId = setTimeout(() => {
			progress.value = withTiming(isMet ? 1 : 0, {
				duration: 400,
				easing: Easing.bezier(0.25, 0.1, 0.25, 1),
			})
		}, delay)

		return () => clearTimeout(timeoutId)
	}, [isMet])

	const animatedStyles = useAnimatedStyle(() => {
		return {
			color: isMet ? theme.colors.success : theme.colors.textSecondary,
			transform: [
				{ translateX: withSpring(progress.value * 3, { damping: 15 }) },
				{ scale: withSpring(0.95 + progress.value * 0.05, { damping: 12 }) },
			],
		}
	})

	return (
		<Animated.View
			style={[
				{
					flexDirection: "row",
					alignItems: "center",
					paddingHorizontal: theme.spacing.sm,
					paddingVertical: theme.spacing.xs,
				},
				animatedStyles,
			]}>
			<View
				style={{
					width: 24,
					alignItems: "center",
					marginRight: theme.spacing.sm,
				}}>
				<Text
					style={{
						fontSize: 16,
						opacity: isMet ? 1 : 0.6,
						transform: [{ scale: isMet ? 1.1 : 0.9 }],
					}}>
					{isMet ? "😎" : "🤔"}
				</Text>
			</View>
			<Text
				style={{
					fontSize: 14,
					color: isMet ? theme.colors.success : theme.colors.textSecondary,
					letterSpacing: 0.2,
				}}>
				{text}
			</Text>
		</Animated.View>
	)
}
