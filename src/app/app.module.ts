import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

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
import { rootReducer } from './store';
import { CounterStoreComponent } from './components/counter-store/counter-store.component';
import routesConsts from './constants/routes.constants';

const routes: Routes = [
  { path: routesConsts.home.pathName, component: TasksComponent },
  { path: '', redirectTo: routesConsts.home.route, pathMatch: 'full' },
  {
    path: routesConsts.promise.pathName,
    component: PromiseComponent,
    children: [
      {
        path: routesConsts.observable.pathName,
        component: ObservableComponent,
      },
      {
        path: routesConsts.counter.pathName,
        component: CounterHolderComponent,
      },
      {
        path: routesConsts.counterService.pathName,
        component: CounterSvcComponent,
      },
      {
        path: routesConsts.counterStore.pathName,
        component: CounterStoreComponent,
      },
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
    CounterStoreComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(rootReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
