import {Component, Directive, ElementRef, HostListener, Output, Renderer2} from '@angular/core';

const dateForInp = new Date();
const currentDate = `${dateForInp.getFullYear()}-${dateForInp.getMonth() + 1 < 10 ? '0' + (dateForInp.getMonth() + 1) :  dateForInp.getMonth() + 1}-${dateForInp.getDate() < 10 ? '0' + (dateForInp.getDate()) :  dateForInp.getDate()}`;
let todoListArr = [];
todoListArr = JSON.parse(localStorage.getItem('todoStorage'));

function init() {
  if (!localStorage.getItem('todoStorage')) {
    localStorage.setItem('todoStorage', JSON.stringify([]));
  }
  if (!localStorage.getItem('basket')) {
    localStorage.setItem('basket', JSON.stringify([]));
  }
}
init();

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() ready: any;
  title = 'angularToDo';
  clicks = 0;
  //
  //
  taskText = '';
  deadLine = currentDate;
  todoListArr = todoListArr;
  addNewRow() {
    if (this.taskText && this.taskText.trim() !== ''  && this.deadLine !== '') {
      todoListArr.unshift({id: +new Date(), ready: false, text: this.taskText, deadLine: this.deadLine});
      localStorage.setItem('todoStorage', JSON.stringify(this.todoListArr));
      this.taskText = '';
    }
  }
  addFromEnter(e) {
    if (e.keyCode === 13) {
      this.addNewRow();  // addBtn.dispatchEvent(new Event('click'));
    }
  }
  onChanged(increased: any) {
    increased === true ? this.clicks++ : this.clicks--;
  }
  // changedReady(ready: any) {
  changedReady(e) {
    todoListArr.forEach( (prop, i) => {
      if (prop.id === +e.target.closest('.row-list').id) {
        todoListArr[i]['ready'] = !todoListArr[i]['ready'] ? true : false; // Что тут не так,,,,????!!!!
        localStorage.setItem('todoStorage', JSON.stringify(todoListArr));
      }
    });
  }
  removedItem(e) {
    todoListArr.forEach( (prop, i) => {
      if (prop.id === +e.target.closest('.row-list').id) {
        todoListArr.splice(i, 1);
        localStorage.setItem('todoStorage', JSON.stringify(this.todoListArr));
      }
    });
  }
  saveEditt(e) {
    localStorage.setItem('todoStorage', JSON.stringify(todoListArr));
  }
}




// import { ChildComponent } from './child.component';
import { RowComponent } from './row.component';

    // todoListArr.forEach( (prop, i) => {
    //   if (prop.id === +e.target.closest('.row-list').id) {
    //   }
    // });






  // const nodes = [].slice.call( e.target.closest('.table-list').children );  //  Array.prototype
    // console.log(nodes);


// const rowSelect = todoListArr[i];
// rowSelect.ready = rowSelect.ready ? false : true;
// todoListArr.splice(i, 1, rowSelect);


//   }


// function fillTodoDisplay( todoListArr ) { todoListArr.forEach( prop => fillRow(prop)) }

// function fillRow(data) {
//
//   const newRow = rowExampl.cloneNode(true);
//   newRow.classList.remove('hidden');
//   newRow.setAttribute('data-id', data.id);
//   newRow.setAttribute('data-ready', data.ready);
//
//   if (data.ready) {
//     newRow.querySelector('.info-field').classList.add('ready-class');
//   }
//   newRow.querySelector('.text-line').innerHTML = data.text;
//   newRow.querySelector('.date-line').innerHTML = data.deadLine;
//   display.insertBefore(newRow , display.firstChild);
//
// }
