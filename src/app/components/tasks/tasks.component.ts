import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { ITask } from '../../../mock-taks';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),

      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(200),
      ]),

      transition(':leave', [
        animate('0.3s ease-in-out', style({ transform: 'translateX(-20px)' })),
        animate(
          '0.3s ease-in-out',
          style({ transform: 'translateX(20px)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  trackByTaskId(index: number, task: ITask): number {
    return task.id;
  }

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks.sort((a, b) => b.id - a.id);
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== id);
    });
  }

  addTask(task: Omit<ITask, 'id'>) {
    this.taskService.addTask(task).subscribe((newTask) => {
      this.tasks = [newTask, ...this.tasks];
    });
  }

  toggleTask(task: ITask) {
    this.taskService.toggleReminder(task).subscribe((updatedTask) => {
      this.tasks = this.tasks.map((t: ITask) =>
        t.id !== task.id ? t : updatedTask
      );
    });
  }
}
