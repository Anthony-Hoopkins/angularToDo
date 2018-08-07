import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Input} from '@angular/core';

import {/*AddDirective,*/ AppComponent} from './app.component';
import { ChildComponent } from './child.component';
import { RowComponent} from './row.component';
import { CountComponent } from './count.component';
import { IfExamplComponent } from './ifExampl.component';
import { ForExamplComponent } from './componentForExampl/forExampl.component';
import { NgNgComponent } from './ngNg/app.ngNg';

@NgModule({
  declarations: [
    AppComponent, ChildComponent, RowComponent, CountComponent, IfExamplComponent,  NgNgComponent,
    ForExamplComponent, /*AddDirective*/
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
