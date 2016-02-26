import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';

import {Component} from 'angular2/core';
import {Home} from '../views/home';
import {LcdChar} from '../views/lcdchar';
import {Search} from '../views/search';


@RouteConfig([
  { path: '/home', component: Home, name: 'Home', useAsDefault: true },
  { path: '/lcd', component: LcdChar, name: 'Lcd' },
  { path: '/search', component: Search, name: 'Search' },
  { path: '/**', redirectTo: ['Home'] }
])
@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES ],
  template: `
    <a [routerLink]="['Home']">Home</a>
    <a [routerLink]="['Lcd']">Lcd</a>
    <a [routerLink]="['Search']">Search</a>
    <div id="main" class="col-sm-9">
      <router-outlet></router-outlet>
    </div>
  `
})
export class App {

}
