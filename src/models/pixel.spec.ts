/// <reference path="../../typings/main.d.ts" />


import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {Pixel} from './pixel';

describe('LcdCharApp', () => {

  it('should toggle the value', function() {
    let pixel = new Pixel(false);
    expect(pixel.value).toBe(false);
    pixel.toggle();
    expect(pixel.value).toBe(true);
  });

});