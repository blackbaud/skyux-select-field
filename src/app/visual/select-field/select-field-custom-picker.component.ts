import {
  Component
} from '@angular/core';

import {
  SkyModalInstance
} from '@skyux/modals';

import {
  SkySelectField
} from '@skyux/select-field/modules/select-field/types';

import {
  SkySelectFieldCustomPickerContext
} from './select-field-custom-picker-context';

@Component({
  selector: 'app-select-field-custom-picker',
  templateUrl: './select-field-custom-picker.component.html'
})
export class SkySelectFieldCustomPickerComponent {

  public title: string = 'Select a fruit';

  public fruitMap = {
    '1': '🍎',
    '2': '🍌',
    '3': '🍈',
    '4': '🍇',
    '5': '🍋',
    '6': '🍓'
  };

  private fruitValues: SkySelectField[];

  constructor(
    private instance: SkyModalInstance,
    public context: SkySelectFieldCustomPickerContext
  ) {
    this.fruitValues = context.pickerContext.selectedValue &&
      context.pickerContext.selectedValue.slice();
  }

  public fruitIsSelected(fruitId: string): boolean {
    return !!(this.fruitValues &&
      this.fruitValues.find(
        (fruit: SkySelectField) => fruit.id === fruitId
      ));
  }

  public toggleFruit(fruit: SkySelectField): void {
    if (this.fruitValues) {
      const fruitIndex = this.fruitValues.indexOf(fruit);

      if (this.fruitValues.indexOf(fruit) >= 0) {
        this.fruitValues.splice(fruitIndex, 1);
      } else {
        this.fruitValues.push(fruit);
      }
    } else {
      this.fruitValues = [fruit];
    }
  }

  public saveFruits(): void {
    this.instance.save(this.fruitValues);
  }

}
