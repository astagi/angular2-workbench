/*
Something cool to read:
http://blog.thoughtram.io/angular/2015/08/11/angular-2-template-syntax-demystified-part-1.html
*/

import {
  HostBinding, Component, Output, EventEmitter,
  Inject, ViewChild
} from 'angular2/core';
import {FocusMe} from '../directives/focus-me';


@Component({
  selector: 'searchbox',
  templateUrl: '/partials/components/searchbox.html',
  directives: [FocusMe]
})
export class SearchBox {

  @Output() change: EventEmitter<any> = new EventEmitter();
  @ViewChild('searchinput') searchInput;
  value: string = '';

  search(query: string) {
    this.value = query;
    this.emitQuery();
  }

  reset() {
    this.value = '';
    this.emitQuery();
    this.searchInput.nativeElement.focus();
  }

  emitQuery() {
    this.change.emit(this.value);
  }

}