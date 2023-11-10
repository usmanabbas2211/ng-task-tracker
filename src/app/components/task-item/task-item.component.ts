import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ITask } from '../../../mock-taks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const deleteTransition = [
  state('in', style({ opacity: 1 })),

  transition(':enter', [
    style({ opacity: 0 }),
    animate(600, style({ opacity: 1 })),
  ]),
  state('out', style({ opacity: 1 })),
  transition(':leave', [
    style({ opacity: 1 }),
    animate(400, style({ opacity: 0 })),
  ]),
];
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  animations: [trigger('deleteEffect', deleteTransition)],
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
