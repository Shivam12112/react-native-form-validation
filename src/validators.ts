export interface ValidationRule {
  rule: (value: string) => boolean;
  message: string;
}

export const minLength = (length: number): ValidationRule => ({
  rule: (value: string) => value.length >= length,
  message: `Password must be at least ${length} characters long.`,
});

export const shouldHaveNumber = (): ValidationRule => ({
  rule: (value: string) => /\d/.test(value),
  message: `Password must have at least one number.`,
});

export const shouldHaveLowerCase = (): ValidationRule => ({
  rule: (value: string) => /[a-z]/.test(value),
  message: `Password must have at least one lowercase letter.`,
});

export const shouldHaveUpperCase = (): ValidationRule => ({
  rule: (value: string) => /[A-Z]/.test(value),
  message: `Password must have at least one Uppercase letter.`,
});
export const shouldHaveSpecialCHarachter = (): ValidationRule => ({
  rule: (value: string) =>
    /[!@#$%^&*(),.?":{}|<>~`/\\;:'"[\]{}\-_=+]/.test(value),
  message: `Password must have at least one Special Charachter.`,
});

export const maxLength = (length: number): ValidationRule => ({
  rule: (value: string) => value.length <= length,
  message: `Password must be no more than ${length} characters long.`,
});
export const validateEmail = (): ValidationRule => ({
  rule: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  message: `Invalid email.`,
});

export const required = (): ValidationRule => ({
  rule: (value: string) => value.trim().length > 0,
  message: 'This field is required.',
});
