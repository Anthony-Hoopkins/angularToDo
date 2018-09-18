import {FormControl, ValidatorFn} from '@angular/forms';

export function myMinLen(min: number): ValidatorFn {
  return (control: FormControl): {[key: string]: any} | null => {
    if (control.value && control.value.length >= min) {
      return null;
    }
    return {
      myMinLength: {
        requiredLength: min,
        // actualLength: control.value.length,// тут скорее всего надо подобрать жизненный цикл компонента.
        errorMessage: ` Мин ${min} символов в описании задачи. `
      }
    };
  };
}
