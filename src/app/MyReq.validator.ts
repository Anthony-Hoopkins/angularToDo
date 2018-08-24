import {FormControl} from '@angular/forms';

export function myRequired(control: FormControl) {
  if (control && control.value) {
    return null;
  }
  return {
    required: {
      errorMessage: ' Обязательное поле! '
    }
  };
}


