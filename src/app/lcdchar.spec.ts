/// <reference path="../../typings/main.d.ts" />


import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {LcdCharApp} from './lcdchar';

describe('LcdCharApp', () => {

  let app: LcdCharApp;

  beforeEach(function() {
    app = new LcdCharApp();
  });

  it('should have name property', function() {
    expect(app.pixels[0].value).toBe(false);
  });

});