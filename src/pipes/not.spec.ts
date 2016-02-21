/// <reference path="../../typings/main.d.ts" />


import {NotPipe} from './not';
describe('NotPipe', () => {
  let pipe: NotPipe;
  beforeEach(() => {
    pipe = new NotPipe();
  });
  it('negate a boolean', () => {
    expect(pipe.transform(true)).toEqual(false);
    expect(pipe.transform(false)).toEqual(true);
  });
});