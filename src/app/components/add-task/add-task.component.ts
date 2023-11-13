import { Component, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ITask } from '../../../mock-taks';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

const slideInOutTransition = [
  state(
    'void',
    style({
      transform: 'translateY(10%)',
      opacity: 0,
    })
  ),
  transition('void <=> *', animate(400)),
];

const fadeInOutTransition = [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate('0.5s ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate(
      '0.5s ease-out',
      style({ opacity: 0, transform: 'translateY(-20px)' })
    ),
  ]),
];

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  animations: [
    trigger('slideInOut', slideInOutTransition),
    trigger('fadeInOut', fadeInOutTransition),
  ],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Omit<ITask, 'id'>> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  subscription!: Subscription;
  showAddTask: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleAddTask()
      .subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    if (!this.text.trim() || !this.day.trim()) {
      alert('Task and day are required');
      return;
    }

    const newTask: Omit<ITask, 'id'> = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
