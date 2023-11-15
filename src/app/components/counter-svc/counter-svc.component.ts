import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-svc',
  templateUrl: './counter-svc.component.html',
  styleUrls: ['./counter-svc.component.css'],
})
export class CounterSvcComponent {
  constructor(private counterService: CounterService) {}
  // counter: number = this.counterService.getCounter();

  getCounter(): number {
    return this.counterService.getCounter();
  }
  onIncrement() {
    this.counterService.onIncrement();
  }
  onDecrement() {
    this.counterService.onDecrement();
  }

  onReset() {
    this.counterService.onReset();
  }
}
