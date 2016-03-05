import {Component} from 'angular2/core';
import {NotPipe} from '../pipes/not';
import {PixelSwitch} from '../components/pixel-switch';
import {Pixel} from '../models/pixel';


@Component({
  selector: 'pixelsrow',
  directives: [PixelSwitch],
  pipes: [NotPipe],
  templateUrl: '/partials/views/pixels-row.html'

})
export class PixelsRow {
  pixels: Pixel[] = [new Pixel(false), new Pixel(false), new Pixel(false)];
}
