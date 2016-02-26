import {Component, Output, EventEmitter, Inject} from 'angular2/core';
import {MainService} from '../services/main-service';
import {SearchBox} from '../components/searchbox';


@Component({
  selector: 'search',
  templateUrl: '/partials/views/search.html',
  directives: [SearchBox],
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