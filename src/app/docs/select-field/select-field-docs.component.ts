import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';

import {
  SkyDocsDemoControlPanelChange,
  SkyDocsDemoControlPanelRadioChoice
} from '@skyux/docs-tools';

import {
  BehaviorSubject
} from 'rxjs';

@Component({
  selector: 'app-select-field-docs',
  templateUrl: 'select-field-docs.component.html',
  styleUrls: ['./select-field-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectFieldDocsComponent implements OnInit {

  public demoSettings: any = {};

  public colors: any[] = [
    { id: '1', label: 'Red' },
    { id: '2', label: 'Green' },
    { id: '3', label: 'Violet' }
  ];

  public colorStream: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  public fruits: any[] = [
    { id: '1', category: 'Pome', label: 'Apple', description: 'Anne eats apples' },
    { id: '2', category: 'Berry', label: 'Banana', description: 'Ben eats bananas' },
    { id: '3', category: 'Pome', label: 'Pear', description: 'Patty eats pears' },
    { id: '4', category: 'Berry', label: 'Grape', description: 'George eats grapes' },
    { id: '5', category: 'Citrus', label: 'Lemon', description: 'Larry eats lemons' },
    { id: '6', category: 'Aggregate fruit', label: 'Strawberry', description: 'Sally eats strawberries' }
  ];

  public fruitStream: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  public myForm: FormGroup;

  public selectModeChoices: SkyDocsDemoControlPanelRadioChoice[] = [
    { value: 'single', label: 'Single' },
    { value: 'multiple', label: 'Multiple' }
  ];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.createForm();
    this.populateData();
  }

  public onDemoReset(): void {
    this.myForm.reset();
  }

  public onDemoSelectionChange(change: SkyDocsDemoControlPanelChange): void {
    if (change.selectMode) {
      this.demoSettings.selectMode = change.selectMode;
    }
  }

  private createForm(): void {
    this.myForm = this.formBuilder.group({
      favoriteColor: new FormControl(),
      favoriteFruits: new FormControl()
    });
  }

  private populateData(): void {
    this.fruitStream.next(this.fruits);
    this.colorStream.next(this.colors);
  }
}
