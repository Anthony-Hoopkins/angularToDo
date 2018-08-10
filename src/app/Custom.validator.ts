import { AbstractControl } from '@angular/forms';

export function emptyStingValidator(control: AbstractControl): { [key: string]: any } {

  const emailRegex = /\S/i;
  const value = control.value;

  const result = emailRegex.test(value);

  if (result) {
    return null;
  } else {
    return {
      'emptyStingValidator': { value }
    };
  }
}


