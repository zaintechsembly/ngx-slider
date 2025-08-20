import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ticks-values-tooltips-slider',
  templateUrl: './ticks-values-tooltips-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class TicksValuesTooltipsSliderComponent {
  value: number = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    showTicksValues: true,
    ticksValuesTooltip: (v: number): string => {
      return 'Tooltip for ' + v;
    }
  };
}
