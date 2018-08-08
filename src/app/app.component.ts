import {Component, Directive, ElementRef, HostListener, Output, Renderer2} from '@angular/core';

const dateForInp = new Date();
const currentDate = `${dateForInp.getFullYear()}-${dateForInp.getMonth() + 1 < 10 ? '0' + (dateForInp.getMonth() + 1) :  dateForInp.getMonth() + 1}-${dateForInp.getDate() < 10 ? '0' + (dateForInp.getDate()) :  dateForInp.getDate()}`;
const todoStorage = 'todoStorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularToDo';
  todoListArr = JSON.parse(localStorage.getItem(todoStorage)) || [];
  taskText = '';
  deadLine = currentDate;
  addNewRow() {
    if (!this.taskText || this.taskText.trim() === '' || this.deadLine === '') {
      return;
    }
      this.todoListArr.unshift({text: this.taskText, ready: false,  deadLine: this.deadLine});
      localStorage.setItem(todoStorage, JSON.stringify(this.todoListArr));
      this.taskText = '';
  }
  addFromEnter(e) {
    if (e.keyCode === 13) {
      this.addNewRow();
    }
  }
  changedReady(index) {
    this.todoListArr[index]['ready'] = !this.todoListArr[index]['ready'];
    localStorage.setItem(todoStorage, JSON.stringify(this.todoListArr));
  }
  removedItem(index) {
    this.todoListArr.splice(index, 1);
    localStorage.setItem(todoStorage, JSON.stringify(this.todoListArr));
  }
  saveEditt() {
    localStorage.setItem(todoStorage, JSON.stringify(this.todoListArr));
  }
}
