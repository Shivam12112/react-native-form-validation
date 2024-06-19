import type { ValidationRule } from './validators';

export const validate = (
  value: string,
  rules: ValidationRule[]
): string | null => {
  for (let rule of rules) {
    if (!rule.rule(value)) {
      return rule.message;
    }
  }
  return null;
};
