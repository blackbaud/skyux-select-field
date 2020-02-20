import {
  Component, OnInit
} from '@angular/core';

import {
  SkySelectFieldCustomPicker,
  SkySelectField
} from '../../public/modules/select-field/types';

import { SkySelectFieldPickerContext } from '../../public';
import { BehaviorSubject } from 'rxjs';
import { SkyModalService, SkyModalCloseArgs } from '@skyux/modals';
import { SkySelectFieldCustomPickerComponent } from './select-field-custom-picker.component';
import { SkySelectFieldCustomPickerContext } from './select-field-custom-picker-context';

@Component({
  selector: 'select-field-custom-visual',
  templateUrl: './select-field-custom-visual.component.html'
})
export class SelectFieldCustomVisualComponent implements OnInit {

  public customPicker: SkySelectFieldCustomPicker = {
    open: (pickerContext, setValue) => {
      this.showCustomPicker(pickerContext, setValue);
    }
  };

  public data = new BehaviorSubject<any[]>([]);

  public formData: any = {};

  public staticData = [
    { id: '1', category: 'Pome', label: 'Apple', description: 'Anne eats apples' },
    { id: '2', category: 'Berry', label: 'Banana', description: 'Ben eats bananas' },
    { id: '3', category: 'Pome', label: 'Pear', description: 'Patty eats pears' },
    { id: '4', category: 'Berry', label: 'Grape', description: 'George eats grapes' },
    { id: '5', category: 'Berry', label: 'Banana', description: 'Becky eats bananas' },
    { id: '6', category: 'Citrus', label: 'Lemon', description: 'Larry eats lemons' },
    { id: '7', category: 'Aggregate fruit', label: 'Strawberry', description: 'Sally eats strawberries' }
  ];

  public updateValueFn: (value: SkySelectField[]) => void;

  constructor(
    private modalService: SkyModalService
  ) {}

  public ngOnInit() {
    this.data.next(this.staticData);
  }

  public run() {
    this.updateValueFn(
      [
        this.staticData[4],
        this.staticData[6]
      ]
    );
  }

  private showCustomPicker(
    pickerContext: SkySelectFieldPickerContext,
    setValue: (value: SkySelectField[]) => void
  ) {
    const picker = this.modalService.open(
      SkySelectFieldCustomPickerComponent,
      [
        {
          provide: SkySelectFieldCustomPickerContext,
          useValue: {
            pickerContext
          }
        }
      ]
    );

    picker.closed.subscribe((args: SkyModalCloseArgs) => {
      if (args.reason === 'save') {
        setValue(args.data);
      }
    });
  }
}
