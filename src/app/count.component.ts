import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-count-comp',
  template: `<button (click)="change(true)">+</button>
               <button (click)="change(false)">-</button>`
})

export class CountComponent {
  @Output() onChanged = new EventEmitter<boolean>();
  change(increased: any) {
    this.onChanged.emit(increased);
  }
}
