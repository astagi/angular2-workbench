import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';

import {Component} from 'angular2/core';
import {Home} from './home';
import {LcdChar} from '../components/lcdchar';

@RouteConfig([
  { path: '/home', component: Home, name: 'Home', useAsDefault: true },
  { path: '/lcd', component: LcdChar, name: 'Lcd' },
  { path: '/**', redirectTo: ['Home'] }
])
@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES ],
  template: `
    <a [routerLink]="['Home']">Home</a>
    <a [routerLink]="['Lcd']">Lcd</a>
    <div id="main" class="col-sm-9">
      <router-outlet></router-outlet>
    </div>
  `
})
export class App {

}
