import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SkySelectFieldModule } from 'projects/select-field/src/public-api';

import { SelectFieldVisualComponent } from './select-field/select-field-visual.component';
import { VisualComponent } from './visual.component';

@NgModule({
  declarations: [
    SelectFieldVisualComponent,
    VisualComponent
  ],
  imports: [
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SkySelectFieldModule
  ]
})
export class VisualModule { }
