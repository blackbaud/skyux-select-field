import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core';

import {
  SkySelectField,
  SkySelectFieldSelectMode
} from './types';

export class SkySelectFieldPickerContext {

  public data: Observable<SkySelectField[]>;
  public addNewRecordButtonClick: EventEmitter<unknown>;
  public headingText?: string;
  public selectedValue?: any;
  public selectMode?: SkySelectFieldSelectMode;
  public showAddNewRecordButton?: boolean;
}
