import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ticks-values-slider',
  templateUrl: './ticks-values-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class TicksValuesSliderComponent {
  value: number = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };
}
