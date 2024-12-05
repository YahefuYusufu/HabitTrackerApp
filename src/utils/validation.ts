import { z } from "zod"

export const validateEmail = (email: string) => {
	const emailSchema = z.string().email().min(1)
	const result = emailSchema.safeParse(email)
	return {
		isEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
		notEmpty: email.length >= 1,
	}
}

export const validatePassword = (password: string) => {
	const passwordSchema = z
		.string()
		.min(8)
		.regex(/[A-Z]/)
		.regex(/[!@#$%^&*(),.?":{}|<>]/)
		.regex(/[0-9]/)

	const result = passwordSchema.safeParse(password)

	return {
		minLength: password.length >= 8,
		hasUppercase: /[A-Z]/.test(password),
		hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
		hasNumber: /[0-9]/.test(password),
	}
}

export const validateFullName = (name: string) => {
	const nameSchema = z.string().min(2).max(50)
	const result = nameSchema.safeParse(name)

	return {
		minLength: name.length >= 2,
		maxLength: name.length <= 50,
	}
}

export const validateConfirmPassword = (
	password: string,
	confirmPassword: string
) => ({
	matches: password === confirmPassword && confirmPassword.length > 0,
})
