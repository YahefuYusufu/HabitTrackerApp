import { useWindowDimensions } from "react-native"

export const useResponsive = () => {
	const { width, height } = useWindowDimensions()

	return {
		isSmallDevice: width < 375,
		screenWidth: width,
		screenHeight: height,
		// Add more responsive helpers as needed
		isLandscape: width > height,
		scale: (size: number) => (width * size) / 375, // Scale based on screen width
	}
}
