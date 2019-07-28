import {
  NgModule
} from '@angular/core';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkySelectFieldModule
} from './public';

import {
  SkyMediaQueryModule
} from '@skyux/core';

@NgModule({
  exports: [
    SkyAppLinkModule,
    SkySelectFieldModule,
    SkyMediaQueryModule
  ]
})
export class AppExtrasModule { }
