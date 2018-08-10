import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent} from './app.component';
import { RowComponent} from './rowComponent/row.component';
import { FormControlMetanitComponent} from './reactiveFormComp/reactive.from.component.metanit';
import { FormControlComponent} from './formControlComponents/form.control.component';

@NgModule({
  declarations: [
    AppComponent,  RowComponent, FormControlMetanitComponent, FormControlComponent
  ],
  imports: [
    BrowserModule,  FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
