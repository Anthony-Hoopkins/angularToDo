import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent} from './app.component';
import { RowComponent} from './rowComponent/row.component';
import {ChangeStyleDirective} from './changeStyle.directive';
import {MyValidDirective} from './myValid.directive';

@NgModule({
  declarations: [
    AppComponent,  RowComponent, ChangeStyleDirective, MyValidDirective
  ],
  imports: [
    BrowserModule,  FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
