/// <reference path="../../typings/main.d.ts" />


import {beforeEachProviders, it, describe, expect, beforeEach, inject, injectAsync, TestComponentBuilder, ComponentFixture} from 'angular2/testing';
import {MainService} from '../services/main-service';
import {provide} from 'angular2/core';
import {Search} from './search';
import {Observable}     from 'rxjs/Observable';
import { HTTP_PROVIDERS } from 'angular2/http';


class MockMainService extends MainService {
  searchSongs(query: string) {
    return new Observable(observer =>
      observer.next([{'title': 'TTT', 'authors' : 'AAA'}])).share();
  }
}

describe('Search Tests', () => {

  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    provide(MainService, { useClass: MockMainService })
  ]);

  it('should change if active', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb
      .overrideProviders(
        Search, [provide(MainService, { useClass: MockMainService })]
      )
      .createAsync(Search).then((fixture) => {
        fixture.componentInstance.search('url');
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.outerHTML).toContain('TTT');
      });
  }));

});