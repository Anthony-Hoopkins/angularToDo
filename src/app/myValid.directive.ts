import {Directive, HostListener, Input, TemplateRef, ViewContainerRef, AfterViewInit, Renderer2, ElementRef, ViewChildren, OnDestroy } from '@angular/core';

@Directive ({
  selector: '[appMyValid]'
})
export class MyValidDirective {
  constructor (/*private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef,*/ private elementRef: ElementRef, private _renderer: Renderer2 ) { }

  @ViewChildren('.alert-danger') _elem: ElementRef;
  alertElement = this._renderer.createElement('div');
  @Input() set appMyValid(controlErrors: any) {
    this.initSomthing(controlErrors);
  }
  validationMessages = {
      'required': 'Обязательное поле. ',
      'minlength': 'Мин 5 символов в описании задачи. ',
      'emptyStingValidator': 'Нельзя использовать только пробелы. '
  };
  private initSomthing(controlErrors) {
    const parent = this.elementRef.nativeElement.parentNode;
    console.log(controlErrors);
    let valueError = '';
    if (controlErrors && !valueError) {
      valueError = '';
      Object.keys(controlErrors).forEach(val => {
        valueError += this.validationMessages[val];
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
