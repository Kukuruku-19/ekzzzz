export interface ValidationResult {
    isValid: boolean;
    message?: string;
  }

export function InputValidator(number: number): ValidationResult {
    if (isNaN(Number(number))) {
        return {
            isValid: false,
            message: "має бути числом",
        };
    }
    if (number > 12 || number < 4) {
        return {
            isValid: false,
            message: "не в проміжку 4-12",
        };
    }
    return { isValid: true };
  }