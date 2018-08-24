import {AbstractControl, FormControl} from '@angular/forms';

export function emptyStingValidator(control: FormControl) {

  const strRegex = /\S/i;
  const value = control.value;

  const result = strRegex.test(value);

  if (result) {
    return null;
  } else {
    return {
      'emptyStingValidator': {
        valid: false,
        errorMessage: ' Нельзя использовать только пробелы! '
      }
    };
  }
}


