import {FormControl, ValidatorFn} from '@angular/forms';

export function myMinLen(min: number): ValidatorFn {
  return (control: FormControl): {[key: string]: any} | null => {
    if (control.value.length > min) {
      return null;
    } else {
      return {
        'myMinLength': {
          valid: false,
          requiredLength: min,
          actualLength: control.value.length,
          errorMessage: ` Мин ${min} символов в описании задачи. `
        }
      };
    }
  };
}
