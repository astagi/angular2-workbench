// https://angular.io/docs/ts/latest/guide/server-communication.html#!#http-client

import {Injectable, Inject}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class MainService {
  constructor( @Inject(Http) private http) { }

  private _serviceUrl = '/';

  searchSongs(query: string) {
    return this.http.get(this._serviceUrl + 'dummy_data/songs.json')
    .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}