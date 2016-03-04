/// <reference path="../../typings/main.d.ts" />


import {it, describe, expect, beforeEach, inject, injectAsync, TestComponentBuilder, ComponentFixture} from 'angular2/testing';
import {FocusMe} from './focus-me';

import {Component} from 'angular2/core';


@Component({
  selector: 'searchbox',
  template: '<input type="text" focusMe/> 1',
  directives: [FocusMe]
})
export class SearchTestBox {}

describe('FocusMe attribute directive Tests', () => {

  beforeEach(function() {
    jasmine.clock().uninstall();
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have the input focused', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(SearchTestBox).then((fixture) => {
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      let input = compiled.childNodes[0];
      spyOn(input, 'focus');
      expect(input.focus).not.toHaveBeenCalled();
      setTimeout(() => {
        expect(input.focus).toHaveBeenCalled();
      }, 100);
      jasmine.clock().tick(101);

    });
  }));

});