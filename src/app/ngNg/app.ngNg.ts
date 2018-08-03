import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-ng',
  template: `<div [ngClass]="{verdanaFont:true}">
              <h1> Hello Angular 6 </h1>
              <p [ngClass]="{segoePrintFont:true}">
                Angular 6 представляет модульную архитектуру приложения
              </p>
             </div>`,
  styles: [`.verdanaFont{font-size:13px; font-family:Verdana;}
    .segoePrintFont{font-size:14px; font-family:"Segoe Print";}`
  ]
})
export class NgNgComponent {
  name = 'Jeka';
}
