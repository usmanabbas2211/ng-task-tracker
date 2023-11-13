import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTaks: boolean = false;
  private subject = new Subject<boolean>();

  constructor() {}

  toggleAddTak(): void {
    console.log('toggleAddTaks service');
    this.showAddTaks = !this.showAddTaks;
    this.subject.next(this.showAddTaks);
  }

  onToggleAddTask() {
    return this.subject.asObservable();
  }
}
