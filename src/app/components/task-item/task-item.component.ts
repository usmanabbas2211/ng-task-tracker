import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { ITask } from 'src/app/types/task.types';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  animations: [
    trigger('simpleOpacityAnimation', [
      state(
        'true',
        style({
          opacity: '0.7',
        })
      ),
      state(
        'false',
        style({
          opacity: '1',
        })
      ),
      transition('false <=> true', animate('300ms ease-in-out')),
    ]),
  ],
})
export class TaskItemComponent {
  @Input() task!: ITask;
  @Input() beingDeleted!: boolean;
  @Input() beindToggled!: boolean;
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<ITask> = new EventEmitter();

  private toggleTaskSubject: Subject<ITask> = new Subject<ITask>();
  private toggleTaskSubscription: Subscription | undefined;

  faTimes = faTimes;
  faSpinner = faSpinner;

  constructor() {
    this.toggleTaskSubject.pipe(throttleTime(1000)).subscribe((task) => {
      this.onToggleTask.emit(task);
    });
  }

  handleDelete(id: number) {
    this.onDeleteTask.emit(id);
  }

  handleToggleReminder(task: ITask) {
    this.toggleTaskSubject.next(task);
  }

  ngOnDestroy() {
    if (this.toggleTaskSubscription) {
      this.toggleTaskSubscription.unsubscribe();
    }
  }
}
