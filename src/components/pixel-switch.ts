import {Component, Input} from 'angular2/core';
import {Pixel} from '../models/pixel';


@Component({
  selector: 'pixel-switch',
  templateUrl: '/partials/components/pixel-switch.html'

})
export class PixelSwitch {
  @Input() pixel: Pixel;

  toggle() {
    this.pixel.toggle();
  }
}