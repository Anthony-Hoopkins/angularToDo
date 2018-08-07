import {Input, Component, Directive, ElementRef, Renderer2, Output, EventEmitter} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
  selector: 'app-row-component',
  templateUrl: `./html/row-component.html`,
  styleUrls: [`./css/row.css`]
})

export class RowComponent {
  @Input() task: any;
    @Output () changedReady = new EventEmitter<boolean>();
  changeReady(increased: any) {
    this.changedReady.emit(increased);
  }
  @Output () removedItem = new EventEmitter<boolean>();  //  ?? что  тут  не так ??
  removeItem(remove: any) {
    this.removedItem.emit(remove);
  }
  @Output () edittItem = new EventEmitter<boolean>();  // todo read about  EventEmitter <boolean>
  editItem(edit: any) {
    this.edittItem.emit(edit);
  }
}



//
// let visibility = false;
//
// editItem(){
//   visibility ? false : true;
// }

//
/* _userAge: number;
 @Input()
 set userAge(age: number) {
   if (age < 0) {
     this._userAge = 0;
   } else if (age > 100) {
     this._userAge = 100;
   } else {
     this._userAge = age;
   }
 }
 get userAge() { return this._userAge; }*/
//
