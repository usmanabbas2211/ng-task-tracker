import { Component, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../../mock-taks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Omit<ITask, 'id'>> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor() {}

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
