/// <reference path="../../typings/main.d.ts" />


import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {LcdChar} from './lcdchar';

describe('LcdChar', () => {

  let app: LcdChar;

  beforeEach(function() {
    app = new LcdChar();
  });

  it('should have name property', function() {
    expect(app.pixels[0].value).toBe(false);
  });

});