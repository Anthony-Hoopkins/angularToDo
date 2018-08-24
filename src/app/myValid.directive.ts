import {Directive, Input, Renderer2, ElementRef, ViewChildren } from '@angular/core';

@Directive ({
  selector: '[appMyValid]'
})
export class MyValidDirective {
  constructor (private elementRef: ElementRef, private _renderer: Renderer2 ) { }

  @ViewChildren('.alert-danger') _elem: ElementRef;
  alertElement = this._renderer.createElement('div');
  @Input() set appMyValid(controlErrors: any) {
    this.initSomthing(controlErrors);
  }
  private initSomthing(controlErrors) {
    const parent = this.elementRef.nativeElement.parentNode;
    let valueError = '';
    if (controlErrors && !valueError) {
      valueError = '';
      Object.keys(controlErrors).forEach(val => {
        valueError += val === 'minlength' ? `Мин ${controlErrors[val].requiredLength} символов в описании задачи. ` : '  ' + controlErrors[val].errorMessage;
      });
      this.alertElement.classList.add('alert-danger');
      this.alertElement.innerHTML = valueError;
      this._renderer.appendChild(parent, this.alertElement);
    } else if (this.alertElement) {
      this.alertElement.innerHTML = '';
      this.alertElement.classList.remove('alert-danger');
    }
  }
}
