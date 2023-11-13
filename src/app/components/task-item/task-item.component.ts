import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../../mock-taks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: ITask;
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<ITask> = new EventEmitter();
  faTimes = faTimes;

  handleDelete(id: number) {
    this.onDeleteTask.emit(id);
  }

  handleToggleReminder(task: ITask) {
    this.onToggleTask.emit(task);
  }
}
