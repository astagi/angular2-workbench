/*
Something cool to read:
http://blog.thoughtram.io/angular/2015/08/11/angular-2-template-syntax-demystified-part-1.html
*/

import {HostBinding, Component, Output, EventEmitter, Inject} from 'angular2/core';


@Component({
  selector: 'searchbox',
  template: `
    <input [value]="value" type="text" (input)="search($event.target.value)"/>
    <span (click)="reset()">X</span>
  `
})
export class SearchBox {

  @Output() change: EventEmitter<any> = new EventEmitter();
  value: string = '';

  search(query: string) {
    this.value = query;
    this.emitQuery();
  }

  reset() {
    this.value = '';
    this.emitQuery();
  }

  emitQuery() {
    this.change.emit(this.value);
  }

}