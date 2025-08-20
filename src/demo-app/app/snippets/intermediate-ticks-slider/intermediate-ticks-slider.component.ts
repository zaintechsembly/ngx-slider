import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-intermediate-ticks-slider',
  templateUrl: './intermediate-ticks-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class IntermediateTicksSliderComponent {
  value: number = 55;
  options: Options = {
    floor: 0,
    ceil: 100,
    showTicks: true,
    tickStep: 10
  };
}
