import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSvcComponent } from './counter-svc.component';

describe('CounterSvcComponent', () => {
  let component: CounterSvcComponent;
  let fixture: ComponentFixture<CounterSvcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterSvcComponent]
    });
    fixture = TestBed.createComponent(CounterSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
