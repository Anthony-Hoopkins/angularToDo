import {FormControl} from '@angular/forms';

export function emptyStingValidator(control: FormControl) {
  const strRegex = /\S/i;
  const value = control.value;

  const result = strRegex.test(value);

  if (result) {
    return null;
  }
  return {
    emptyStingValidator: {
      errorMessage: ' Нельзя использовать только пробелы! '
    }
  };
}


