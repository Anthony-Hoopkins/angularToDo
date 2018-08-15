import {Directive, HostListener, Input, TemplateRef, ViewContainerRef, AfterViewInit, Renderer2, ElementRef, ViewChildren, OnDestroy } from '@angular/core';

@Directive ({
  selector: '[appMyValid]'
})
export class MyValidDirective {
  //
  constructor (/*private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef,*/ private elementRef: ElementRef, private _renderer: Renderer2 ) { }

  @ViewChildren('.alert-danger') _elem: ElementRef;
  alertElement = this._renderer.createElement('div');
  @Input() set appMyValid(condition: any) {
    this.initSomthing(condition);
  }
  private initSomthing(condition) {
    const parent = this.elementRef.nativeElement.parentNode;
    let valueErrore;
    console.log(valueErrore);
      if (condition && !valueErrore) {
        valueErrore = condition;
        this.alertElement.classList.add('alert-danger');
        this.alertElement.innerHTML = valueErrore;
        this._renderer.appendChild(parent, this.alertElement);
      } else if (condition && valueErrore) {
        this.alertElement.innerHTML = condition;
      } else if (this.alertElement) {
        this.alertElement.innerHTML = '';
        this.alertElement.classList.remove('alert-danger');
      }
  }
}
