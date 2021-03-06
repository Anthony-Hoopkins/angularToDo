import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {ToDoItem} from './ToDoItem';
import {emptyStingValidator} from './Custom.validator';
import {myRequired} from './MyReq.validator';
import {myMinLen} from './myMinLen.validator';

const dateForInp = new Date();
const currentDate = `${dateForInp.getFullYear()}-${dateForInp.getMonth() + 1 < 10 ? '0' + (dateForInp.getMonth() + 1) :  dateForInp.getMonth() + 1}-${dateForInp.getDate() < 10 ? '0' + (dateForInp.getDate()) :  dateForInp.getDate()}`;
const todoStorage = 'todoStorage';

interface IndexTask {
  index: number;
  text: string;
  deadLine: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularToDo';
  todoListArr: ToDoItem[] = JSON.parse(localStorage.getItem(todoStorage)) || [];
  public myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }  // тут реализовано создание формы через FormBuilder
  //
  formErrors = {
    'userTask': '',
    'userDeadLine': ''
  };
  controlErrors: any = {};
  onValueChange(data: any) {
    if (!this.myForm) {
      console.log('Форма еще не инициализирована!');
      return;
    }
    const form = this.myForm;
    for (const field in this.formErrors) {
      this.controlErrors[field] = '';
      // form.get - получение элемента управления
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        this.controlErrors[field] = control.errors;
      }
    }
  }
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'userTask': ['', [myRequired, emptyStingValidator, myMinLen(4)]],
      'userDeadLine': [currentDate,  myRequired ]
    });
    this.myForm.valueChanges.subscribe(data => this.onValueChange(data));
  }
  submit() {
    this.todoListArr.unshift({text: this.myForm.controls['userTask'].value, ready: false,  deadLine:  this.myForm.controls['userDeadLine'].value});
    localStorage.setItem(todoStorage, JSON.stringify(this.todoListArr));
    this.myForm.controls['userTask'].reset();
  }
  onSaveEdit(obj: IndexTask) {
    this.todoListArr[obj.index].text = obj.text;
    this.todoListArr[obj.index].deadLine = obj.deadLine;
    localStorage.setItem(todoStorage, JSON.stringify(this.todoListArr));
  }
  onChangeReady(index: number) {
    this.todoListArr[index].ready = !this.todoListArr[index].ready;
    localStorage.setItem(todoStorage, JSON.stringify(this.todoListArr));
  }
  onRemoveItem(index: number) {
    this.todoListArr.splice(index, 1);
    localStorage.setItem(todoStorage, JSON.stringify(this.todoListArr));
  }
}
