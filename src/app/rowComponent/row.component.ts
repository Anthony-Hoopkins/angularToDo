import {Input, Component, Output, EventEmitter} from '@angular/core';
import {ToDoItem} from '../ToDoItem';

@Component({
  selector: 'app-row-component',
  templateUrl: `./row.component.html`,
  styleUrls: [`./row.css`]
})
export class RowComponent {
  @Input() task: ToDoItem;
  @Input() index: number;

  visibility = false;
  @Output () onChangeReady = new EventEmitter<number>();
  changeReady() {
    this.onChangeReady.emit(this.index);
  }
  @Output () onRemoveItem = new EventEmitter<number>();
  removeItem() {
    this.onRemoveItem.emit(this.index);
  }
  @Output () onSaveEdit = new EventEmitter<void>();
  saveEdit() {
    this.onSaveEdit.emit();
  }
  addFromEnter() {
      this.validationAndSave();
  }
  validationAndSave() {
    if (!this.task.text || this.task.text.trim() === ''  ||  this.task.deadLine === '') {
      return;
    }
      this.saveEdit();
      this.toggleVisibility();
  }
  toggleVisibility() {
    this.visibility = !this.visibility;
  }
}

