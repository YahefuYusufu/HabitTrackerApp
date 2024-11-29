import { createTamagui } from "tamagui"
import { shorthands } from "@tamagui/shorthands"
import { themes } from "@tamagui/themes"
import { createMedia } from "@tamagui/react-native-media-driver"
import { tokens } from "@tamagui/themes"

const config = createTamagui({
	defaultTheme: "light",
	themes,
	tokens,
	shorthands,
	media: createMedia({
		xs: { maxWidth: 660 },
		sm: { maxWidth: 800 },
		md: { maxWidth: 1020 },
	}),
})

export type AppConfig = typeof config
export default config
