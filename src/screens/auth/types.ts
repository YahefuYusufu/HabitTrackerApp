import { z } from "zod"

export const loginSchema = z.object({
	email: z.string().email("Invalid email address").min(1, "Email is required"),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.regex(/[A-Z]/, "Password must contain at least one uppercase letter")
		.regex(
			/[!@#$%^&*(),.?":{}|<>]/,
			"Password must contain at least one special character"
		)
		.regex(/[0-9]/, "Password must contain at least one number"),
})

export const signupSchema = z
	.object({
		fullName: z
			.string()
			.min(2, "Name must be at least 2 characters")
			.max(50, "Name cannot exceed 50 characters"),
		email: loginSchema.shape.email,
		password: loginSchema.shape.password,
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	})

export const forgotPasswordSchema = z.object({
	email: loginSchema.shape.email,
})

export type LoginFormData = z.infer<typeof loginSchema>
export type SignupFormData = z.infer<typeof signupSchema>
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
