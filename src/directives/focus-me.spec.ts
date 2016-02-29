/// <reference path="../../typings/main.d.ts" />


import {it, describe, expect, beforeEach, inject, injectAsync, TestComponentBuilder, ComponentFixture} from 'angular2/testing';
import {FocusMe} from './focus-me';


import {Component} from 'angular2/core';


@Component({
  selector: 'searchbox',
  template: '<input type="text" focusMe/> 1',
  directives: [FocusMe]
})
export class SearchTestBox {

}

describe('FocusMe attribute directive Tests', () => {

  it('should change if active', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(SearchTestBox).then((fixture) => {

      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.outerHTML).toContain('1');

    });
  }));

});