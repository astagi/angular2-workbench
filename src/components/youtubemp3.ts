import {Component, Input, Inject} from 'angular2/core';
import {MainService} from '../services/main-service';


@Component({
  selector: 'youtubemp3',
  templateUrl: '/partials/components/youtubemp3.html',
  providers: [MainService]
})
export class YouTubeMp3 {

  musicUrl: string = '';
  errorMessage: string;

  constructor(@Inject(MainService) private _mainService) { }

  getMusicLink(videoUrl: string) {
    this._mainService.getMusicLink(videoUrl)
                     .subscribe(
                        musicUrl => this.musicUrl = musicUrl,
                        error =>  this.errorMessage = <any>error);
  }
}