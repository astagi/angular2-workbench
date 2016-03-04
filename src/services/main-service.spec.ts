/// <reference path="../../typings/main.d.ts" />


import {setBaseTestProviders} from 'angular2/testing';
import {Observable}     from 'rxjs/Observable';
import { HTTP_PROVIDERS } from 'angular2/http';

import {beforeEachProviders, it, describe, expect, beforeEach, inject, injectAsync, TestComponentBuilder, ComponentFixture} from 'angular2/testing';
import {MainService} from './main-service';
import {provide} from 'angular2/core';

class MockMainService extends MainService {
    searchSongs(query: string) {
      return new Observable(observer =>
            observer.next([{'title': 'TTT', 'authors' : 'AAA'}])).share();
    }
}

describe('MainService', () => {

  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    provide(MainService, { useClass: MockMainService })
  ]);

  it('should work', inject([MainService], (testService: MainService) => {

    testService.searchSongs('my song').subscribe(
      (data) => {
        expect(data[0].title).toBe('TTT');
      },
      (error) => {
       fail(error);
      }
    );

  }));

});
