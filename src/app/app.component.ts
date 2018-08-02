import { Component } from '@angular/core';
// import { ChildComponent } from './child.component';

const dateForInp = new Date();
const currentDate = `${dateForInp.getFullYear()}-${dateForInp.getMonth() + 1 < 10 ? '0' + (dateForInp.getMonth() + 1) :  dateForInp.getMonth() + 1}-${dateForInp.getDate() < 10 ? '0' + (dateForInp.getDate()) :  dateForInp.getDate()}`;

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  myDate = new Date(1991, 3, 42);
  taskText = '';
  deadLine = currentDate;
  nameU = 'Jim';
  age = 24;
  title = 'angularToDo';
  name = 'name*from*app_comp';
  clicks = 0;
  onChanged(increased: any) {
    increased === true ? this.clicks++ : this.clicks--;
  }

}

function init() {
  if (!localStorage.getItem('todoStorage')) {
    localStorage.setItem('todoStorage', JSON.stringify([]));
  }
  if (!localStorage.getItem('basket')) {
    localStorage.setItem('basket', JSON.stringify([]));
  }
}
init();

const rowExampl = document.querySelector('.row-list');  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! тут по ангуляровски
let todoListArr = [];

function loadDataFromStore() {
  todoListArr = [];
  todoListArr = JSON.parse(localStorage.getItem('todoStorage'));
  if (todoListArr && todoListArr.length !== 0) {
    fillTodoDisplay(todoListArr);
  }
}
loadDataFromStore();

function fillTodoDisplay( todoListArr ) { todoListArr.forEach( prop => fillRow(prop)) }

function fillRow(data) {

  const newRow = rowExampl.cloneNode(true);
  // newRow.classList.remove('hidden');
  // newRow.setAttribute('data-id', data.id);
  // newRow.setAttribute('data-ready', data.ready);

  // if (data.ready) {
  //   newRow.querySelector('.info-field').classList.add('ready-class');
  // }
  // newRow.querySelector('.text-line').innerHTML = data.text;
  // newRow.querySelector('.date-line').innerHTML = data.deadLine;
  // display.insertBefore(newRow , display.firstChild);

}
