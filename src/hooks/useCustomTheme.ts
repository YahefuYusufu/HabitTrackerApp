import { useTheme } from "react-native-paper"
import type { CustomTheme } from "../theme/types"

export const useCustomTheme = () => useTheme<CustomTheme>()
