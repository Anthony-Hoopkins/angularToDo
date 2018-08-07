import { Component} from '@angular/core';

@Component({
  selector: 'app-for-exampl',
  template: `<ul>
              <li *ngFor="let item of items">{{item}}</li>
            </ul>`
})
export class ForExamplComponent {
  items = ['Apple iPhone 7', 'Huawei Mate 9', 'Samsung Galaxy S7', 'Motorola Moto Z', 'Nokia 3220'];
}
