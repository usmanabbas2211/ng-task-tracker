import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit, AfterViewInit {
  listItems: string[] = [];

  constructor() {}

  @ViewChild('addBtn')
  addBtn!: ElementRef;

  ngOnInit(): void {
    console.log('init');
  }

  ngAfterViewInit(): void {
    console.log('done');
    fromEvent(this.addBtn.nativeElement, 'click')
      .pipe(throttleTime(1000))
      .subscribe({
        next: (response: any) =>
          this.listItems.push(`item ${this.listItems.length + 1}`),
        error: (error: unknown) => console.log(error),
        complete: () => console.log('complete'),
      });
  }
}
