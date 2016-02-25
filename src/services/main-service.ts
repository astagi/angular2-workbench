// https://angular.io/docs/ts/latest/guide/server-communication.html#!#http-client

import {Injectable, Inject}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class MainService {
  constructor(@Inject(Http) private http) { }

  private _serviceUrl = 'http://www.youtubeinmp3.com/fetch/?format=JSON&video=';

  getFakeElements(query: string) {
    return new Observable(observer =>
          observer.next(['Element 1', 'Element 2', 'Element 3'])).share();

  }

  getMusicLink(videoUrl: string) {
    return this.http.get(this._serviceUrl + videoUrl)
      .map(res => res.text())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}