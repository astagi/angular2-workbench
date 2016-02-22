/// <reference path="../../typings/main.d.ts" />


import {beforeEachProviders, it, describe, expect, beforeEach, inject, injectAsync, TestComponentBuilder, ComponentFixture} from 'angular2/testing';
import {MainService} from '../services/main-service';
import {provide} from 'angular2/core';
import {YouTubeMp3} from './youtubemp3';
import {Observable}     from 'rxjs/Observable';
import { HTTP_PROVIDERS } from 'angular2/http';


class MockMainService extends MainService {
  getMusicLink(videoUrl: string) {
    return new Observable(observer =>
          observer.next('Hola')).share();
  }
}

describe('YouTubeMp3 Tests', () => {

  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    provide(MainService, { useClass: MockMainService })
  ]);

  it('should change if active', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb
      .overrideProviders(
        YouTubeMp3, [provide(MainService, { useClass: MockMainService })]
      )
      .createAsync(YouTubeMp3).then((fixture) => {
        fixture.componentInstance.getMusicLink('url');
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.outerHTML).toContain('Hola');
    });
  }));

});
