export type RootStackParamList = {
	Auth: undefined
	TabNavigator: undefined
}

export type AuthStackParamList = {
	Login: undefined
	Signup: undefined
	ForgotPassword: undefined
}

export type MainStackParamList = {
	Home: undefined
	HabitDetails: { habitId: string }
	Settings: undefined
}
