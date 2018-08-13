import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent} from './app.component';
import { RowComponent} from './rowComponent/row.component';
import {ValidateDirective} from './validate.directive';

@NgModule({
  declarations: [
    AppComponent,  RowComponent, ValidateDirective
  ],
  imports: [
    BrowserModule,  FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
