import {Input, Component, Output, EventEmitter} from '@angular/core';
import {ToDoItem} from '../ToDoItem';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emptyStingValidator} from '../Custom.validator';

@Component({
  selector: 'app-row-component',
  templateUrl: `./row.component.html`,
  styleUrls: [`./row.css`]
})
export class RowComponent {
  @Input() task: ToDoItem;
  @Input() index: number;

  visibility = false;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {   // тут реализовано создание формы через FormBuilder
    this.myForm = formBuilder.group({
      'userTask': ['', [Validators.required, emptyStingValidator]],
      'userDeadLine': ['',  Validators.required ]
    });
  }
  submit() {
    console.log(this.myForm);
    this.toggleVisibility();
    this.saveEdit();
    // this.myForm.controls['userTask'].reset();
  }
  @Output () onChangeReady = new EventEmitter<number>();
  changeReady() {
    this.onChangeReady.emit(this.index);
  }
  @Output () onRemoveItem = new EventEmitter<number>();
  removeItem() {
    this.onRemoveItem.emit(this.index);
  }
  @Output () onSaveEdit = new EventEmitter<any>();
  saveEdit() {
    console.log({index: this.index, text: this.myForm.controls['userTask'].value});
    this.onSaveEdit.emit({index: this.index, text: this.myForm.controls['userTask'].value});
  }
  toggleVisibility() {
    this.visibility = !this.visibility;
  }

}

