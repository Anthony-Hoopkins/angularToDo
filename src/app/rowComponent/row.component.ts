import {Input, Component, Directive, ElementRef, Renderer2, Output, EventEmitter} from '@angular/core';
import index from '@angular/cli/lib/cli';

@Component({
  // moduleId: module.id;
  selector: 'app-row-component',
  templateUrl: `./row.component.html`,
  styleUrls: [`./row.css`]
})
export class RowComponent {
  @Input() task: any;
  @Input() index: number;

  visibility = false;
  @Output () changedReady = new EventEmitter<boolean>();
  changeReady(change: any) {
    this.changedReady.emit(change);
  }
  @Output () removedItem = new EventEmitter<number>();  //  ?? что  тут  не так ??
  removeItem(remove: number) {
    this.removedItem.emit(remove);
  }
  @Output () saveEditt = new EventEmitter<boolean>();  // todo read about  EventEmitter <boolean>
  saveEdit() {
    this.saveEditt.emit();
  }
  addFromEnter() {
      this.validation();
  }
  validation() {
    if (!this.task.text || this.task.text.trim() === ''  ||  this.task.deadLine === '') {
      return;
    }
      this.saveEdit();
      this.toggle();
  }
  toggle() {
    this.visibility = !this.visibility;
  }
}

