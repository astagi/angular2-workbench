import {Component} from 'angular2/core';
import {NotPipe} from '../pipes/not';
import {PixelSwitch} from '../components/pixel-switch';
import {YouTubeMp3} from '../components/youtubemp3';
import {Pixel} from '../models/pixel';


@Component({
  selector: 'lcdchar',
  directives: [PixelSwitch, YouTubeMp3],
  pipes: [NotPipe],
  template: `
    <pixel-switch *ngFor="#pixel of pixels" [pixel]="pixel"></pixel-switch>
    <div *ngFor="#pixel of pixels">{{pixel.value | not}}</div>
    <youtubemp3></youtubemp3>
  `
})
export class LcdChar {
  pixels: Pixel[] = [new Pixel(false), new Pixel(false), new Pixel(false)];
}
