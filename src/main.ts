
import {bootstrap}  from 'angular2/platform/browser';
import {LcdCharApp} from './app/lcdchar';
import { HTTP_PROVIDERS } from 'angular2/http';


bootstrap(LcdCharApp, [ HTTP_PROVIDERS ]);