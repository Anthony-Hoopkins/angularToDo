import { Input, Component, Directive, ElementRef, Renderer2} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
  selector: 'app-row-component',
  templateUrl: `./html/row-component.html`,
  styleUrls: [`./css/row.css`]
})

export class RowComponent {
  todoListArr = JSON.parse(localStorage.getItem('todoStorage'));
  @Input() taskText: string;
  @Input() userName: string;
  @Input() deadLine: any;

  _userAge: number;

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
  get userAge() { return this._userAge; }
}
