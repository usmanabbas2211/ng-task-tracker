import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservableComponent } from './components/observable/observable.component';
import { CounterButtonsComponent } from './components/counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';
import { CounterHolderComponent } from './components/counter/counter-holder/counter-holder.component';
import { CounterSvcComponent } from './components/counter-svc/counter-svc.component';

const routes: Routes = [
  { path: 'home', component: TasksComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'promise',
    component: PromiseComponent,
    children: [
      { path: 'observable', component: ObservableComponent },
      { path: 'counter', component: CounterHolderComponent },
      { path: 'counter-service', component: CounterSvcComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    PromiseComponent,
    ObservableComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterHolderComponent,
    CounterSvcComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
