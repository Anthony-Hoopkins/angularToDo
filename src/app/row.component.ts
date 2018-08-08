import {Input, Component, Directive, ElementRef, Renderer2, Output, EventEmitter} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
  selector: 'app-row-component',
  templateUrl: `./html/row-component.html`,
  styleUrls: [`./css/row.css`]
})

export class RowComponent {
  @Input() task: any;
  // @Input() newText: string;
  // @Input() newDate: number;
  visibility = false;
  @Output () changedReady = new EventEmitter<boolean>();
  changeReady(increased: any) {
    this.changedReady.emit(increased);
  }
  @Output () removedItem = new EventEmitter<boolean>();  //  ?? что  тут  не так ??
  removeItem(remove: any) {
    this.removedItem.emit(remove);
  }
  @Output () saveEditt = new EventEmitter<boolean>();  // todo read about  EventEmitter <boolean>
  saveEdit(edit: any) {
    this.saveEditt.emit(edit);
  }
  showInput() {
    console.log('show input');
  }
  addFromEnter(e) {
    if (e.keyCode === 13) {
      this.validation();
      this.saveEdit(e);
    } else if (e.keyCode === 27) {
      this.validation();
    }
  }
  validation() {
    if (this.task.text && this.task.text.trim() !== ''  && this.task.deadLine !== '') {
      this.toggle();
    }
  }
  toggle() {
    this.visibility = !this.visibility;
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
