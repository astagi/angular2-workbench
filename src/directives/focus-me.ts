import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
    selector: '[focusMe]'
})
export class FocusMe {
  constructor(el: ElementRef) {
    setTimeout(() => {
      el.nativeElement.focus();
    });
  }
}