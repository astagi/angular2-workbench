
import {bootstrap}  from 'angular2/platform/browser';
import {App} from './app/app';
import {APP_BASE_HREF, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import {provide} from 'angular2/core';


bootstrap(App, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(APP_BASE_HREF, {useValue : '/' })
]);