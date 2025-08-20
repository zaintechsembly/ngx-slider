import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ticks-custom-tooltips-slider',
  templateUrl: './ticks-custom-tooltips-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class TicksCustomTooltipsSliderComponent {
  value: number = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    showTicks: true,
    ticksTooltip: (v: number): string => {
      return 'Tooltip for ' + v;
    }
  };
}
