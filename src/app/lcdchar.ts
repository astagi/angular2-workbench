import {Component} from 'angular2/core';
import {NotPipe} from '../pipes/not';
import {PixelSwitch} from '../components/pixel-switch';
import {Pixel} from '../models/pixel';


@Component({
  selector: 'lcdchar-app',
  directives: [PixelSwitch],
  pipes: [NotPipe],
  template: `
    <pixel-switch *ngFor="#pixel of pixels" [pixel]="pixel"></pixel-switch>
    <div *ngFor="#pixel of pixels">{{pixel.value | not}}</div>

  `
})
export class LcdCharApp {
  pixels: Pixel[] = [new Pixel(false), new Pixel(false), new Pixel(false)];
}
