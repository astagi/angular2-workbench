import {Component} from 'angular2/core';
import {NotPipe} from '../pipes/not';
import {PixelSwitch} from '../components/pixel-switch';
import {Pixel} from '../models/pixel';


@Component({
  selector: 'lcdchar',
  directives: [PixelSwitch],
  pipes: [NotPipe],
  templateUrl: '/partials/views/lcdchar.html'

})
export class LcdChar {
  pixels: Pixel[] = [new Pixel(false), new Pixel(false), new Pixel(false)];
}
