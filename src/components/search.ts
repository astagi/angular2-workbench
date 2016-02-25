import {Component, Output, EventEmitter, Inject} from 'angular2/core';
import {MainService} from '../services/main-service';


@Component({
  selector: 'search',
  template: `
    <input type="text" #searchtext (keyup)="search(searchtext.value)"/>
    <div *ngFor="#element of elements">{{element}}</div>
  `,
  providers: [MainService]

})
export class Search {

  elements: string[];

  constructor(@Inject(MainService) private _mainService) { }

  search(query: string) {
    this._mainService.getFakeElements(query)
                   .subscribe(
                      elements => this.elements = elements);
  }
}