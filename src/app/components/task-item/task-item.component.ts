import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ITask } from 'src/app/types/task.types';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: ITask;
  @Input() beingDeleted!: boolean;
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<ITask> = new EventEmitter();
  faTimes = faTimes;
  faSpinner = faSpinner;

  handleDelete(id: number) {
    this.onDeleteTask.emit(id);
  }

  handleToggleReminder(task: ITask) {
    this.onToggleTask.emit(task);
  }
}
