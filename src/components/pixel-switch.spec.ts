/// <reference path="../../typings/main.d.ts" />


import {setBaseTestProviders} from 'angular2/testing';

import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

import {it, describe, expect, beforeEach, inject, injectAsync, TestComponentBuilder, ComponentFixture} from 'angular2/testing';
import {PixelSwitch} from './pixel-switch';
import {Pixel} from '../models/pixel';


describe('PixelSwitch Tests', () => {

  setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

  let pixelSwitch: PixelSwitch;

  beforeEach(() => {
    pixelSwitch = new PixelSwitch();
  });

  it('should change if active', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(PixelSwitch).then( (fixture) => {

      fixture.componentInstance.pixel = new Pixel(true);
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.outerHTML).toContain('1');

      fixture.componentInstance.pixel = new Pixel(false);
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
      expect(compiled.outerHTML).toContain('0');

    });
  }));

});