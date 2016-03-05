/// <reference path="../../typings/main.d.ts" />


import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {PixelsRow} from './pixels-row';

describe('PixelsRow', () => {

  let component: PixelsRow;

  beforeEach(function() {
    component = new PixelsRow();
  });

  it('should have name property', function() {
    expect(component.pixels[0].value).toBe(false);
  });

});