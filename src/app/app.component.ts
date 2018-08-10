import {Component} from '@angular/core';
import { FormGroup,  Validators, FormBuilder} from '@angular/forms';
import {ToDoItem} from './ToDoItem';
import {emptyStingValidator} from './Custom.validator';

const dateForInp = new Date();
const currentDate = `${dateForInp.getFullYear()}-${dateForInp.getMonth() + 1 < 10 ? '0' + (dateForInp.getMonth() + 1) :  dateForInp.getMonth() + 1}-${dateForInp.getDate() < 10 ? '0' + (dateForInp.getDate()) :  dateForInp.getDate()}`;
const todoStorage = 'todoStorage';

interface IndexTask {
  index: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularToDo';
  todoListArr: ToDoItem[] = JSON.parse(localStorage.getItem(todoStorage)) || [];
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {   // тут реализовано создание формы через FormBuilder
    this.myForm = formBuilder.group({
      'userTask': ['', [Validators.required, emptyStingValidator]],
      'userDeadLine': [currentDate,  Validators.required ]
    });
  }
  submit() {
    console.log(this.myForm);
    this.todoListArr.unshift({text: this.myForm.controls['userTask'].value, ready: false,  deadLine:  this.myForm.controls['userDeadLine'].value});
    localStorage.setItem(todoStorage, JSON.stringify(this.todoListArr));
    this.myForm.controls['userTask'].reset();
  }
  onSaveEdit(obj: IndexTask) {
    this.todoListArr[obj.index].text = obj.text;
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
