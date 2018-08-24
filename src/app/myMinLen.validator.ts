import {FormControl, ValidatorFn} from '@angular/forms';

export function myMinLen(min: number): ValidatorFn {
  return (control: FormControl): {[key: string]: any} | null => {
    if (control.value && control.value.length >= min) {
      return null;
    }
    return {
      myMinLength: {
        requiredLength: min,
        errorMessage: ` Мин ${min} символов в описании задачи. `
      }
    };
  };
}
