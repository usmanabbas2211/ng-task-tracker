import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-holder',
  templateUrl: './counter-holder.component.html',
  styleUrls: ['./counter-holder.component.css'],
})
export class CounterHolderComponent implements OnInit {
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onIncrement(): void {
    this.counter++;
  }
  onDecrement(): void {
    this.counter--;
  }
  onReset(): void {
    this.counter = 0;
  }
}
