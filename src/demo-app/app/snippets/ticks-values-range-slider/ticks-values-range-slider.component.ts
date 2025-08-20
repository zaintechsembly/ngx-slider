import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ticks-values-range-slider',
  templateUrl: './ticks-values-range-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class TicksValuesRangeSliderComponent {
  minValue: number = 1;
  maxValue: number = 8;
  options: Options = {
    floor: 0,
    ceil: 10,
    showTicksValues: true
  };
}
