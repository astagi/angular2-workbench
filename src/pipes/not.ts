import {Pipe} from 'angular2/core';


@Pipe({ name: 'not' })
export class NotPipe {
  transform(value: boolean) {
    return !value;
  }
}