import { Component } from '@angular/core';
import routesConsts from '../../constants/routes.constants';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent {
  routesConsts = routesConsts;
}
