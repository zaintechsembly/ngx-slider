import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-selection-bar-from-value-slider',
  templateUrl: './selection-bar-from-value-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class SelectionBarFromValueSliderComponent {
  value: number = 5;
  options: Options = {
    floor: -10,
    ceil: 10,
    showSelectionBarFromValue: 0
  };
}
