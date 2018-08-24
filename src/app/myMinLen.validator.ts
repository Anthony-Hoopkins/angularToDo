import {FormControl} from '@angular/forms';

export function myMinLen(min: number, control?: FormControl) {
  console.log(min);
  if (control.value.length > 8) {
    return null;
  } else {
    return {
      'required': {
        valid: false,
        errorMessage: 'Min leng'
      }
    };
  }
}


