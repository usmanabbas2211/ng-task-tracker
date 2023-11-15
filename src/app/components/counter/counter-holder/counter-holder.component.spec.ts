import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterHolderComponent } from './counter-holder.component';

describe('CounterHolderComponent', () => {
  let component: CounterHolderComponent;
  let fixture: ComponentFixture<CounterHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterHolderComponent]
    });
    fixture = TestBed.createComponent(CounterHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
