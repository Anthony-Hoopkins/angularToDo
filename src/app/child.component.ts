import { Component } from '@angular/core';

@Component({
  selector: 'app-childd-comp',
  template: `<h2 #userName>Добро пожаловать {{name}} in the child-compon!</h2>
                <p> {{userName.textContent}}</p>
              <ng-content></ng-content>`,
  styles: [`h2, p {color:red;}`]
})

export class ChildComponent {
  name = 'Jeka';
}
