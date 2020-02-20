import {
  NgModule
} from '@angular/core';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkySelectFieldModule
} from './public';
import { SkySelectFieldCustomPickerComponent } from './visual/select-field/select-field-custom-picker.component';
import { SkyModalModule } from '@skyux/modals';
import { SkyListModule, SkyListPagingModule } from '@skyux/list-builder';
import { SkyListViewChecklistModule } from '@skyux/list-builder-view-checklist';

@NgModule({
  entryComponents: [
    SkySelectFieldCustomPickerComponent
  ],
  exports: [
    SkyAppLinkModule,
    SkySelectFieldModule,
    SkyModalModule,
    SkyListModule,
    SkyListViewChecklistModule,
    SkyListPagingModule
  ]
})
export class AppExtrasModule { }
