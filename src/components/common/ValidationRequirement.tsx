import React from "react"
import { Text } from "react-native"
import Animated, {
	FadeInDown,
	FadeOutUp,
	Layout,
	useAnimatedStyle,
	withSpring,
	interpolateColor,
	useSharedValue,
	withTiming,
	Easing,
} from "react-native-reanimated"
import { colors } from "theme"

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
		const color = interpolateColor(
			progress.value,
			[0, 1],
			[colors.gray || "#94A3B8", colors.success || "#22C55E"]
		)

		return {
			color,
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
					marginHorizontal: 8,
					marginVertical: 4,
				},
			]}>
			<Animated.Text
				style={[
					{
						fontSize: 14,
						fontWeight: "400",
						letterSpacing: 0.2,
					},
					animatedStyles,
				]}>
				<Text style={{ fontSize: 16, marginRight: 8 }}>
					{isMet ? "😎" : "🥺"}
				</Text>
				{text}
			</Animated.Text>
		</Animated.View>
	)
}
