import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectFieldVisualComponent } from './visual/select-field/select-field-visual.component';

import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
    path: 'visual',
    component: VisualComponent
  },
  {
    path: 'visual/select-field',
    component: SelectFieldVisualComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
