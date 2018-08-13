import {Input, Component, Output, EventEmitter, OnInit} from '@angular/core';
import {ToDoItem} from '../ToDoItem';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emptyStingValidator} from '../Custom.validator';

@Component({
  selector: 'app-row-component',
  templateUrl: `./row.component.html`,
  styleUrls: [`./row.css`]
})
export class RowComponent implements OnInit {
  @Input() task: ToDoItem;
  @Input() index: number;
  visibility = false;
  myForm: FormGroup;
  //
  constructor (private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.initForm();
  }
  submit() {
    this.saveEdit();
    this.toggleVisibility();
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
    this.onSaveEdit.emit({index: this.index, text: this.myForm.controls['userTask'].value, deadLine: this.myForm.controls['userDeadLine'].value});
  }
  toggleVisibility() {
    this.visibility = !this.visibility;
  }
  private initForm() {
      this.myForm = this.formBuilder.group({
        'userTask': [this.task.text, [Validators.required, emptyStingValidator]],
        'userDeadLine': [this.task.deadLine,  Validators.required ]
      });
  }
}


