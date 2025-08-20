import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-ticks-slider',
  templateUrl: './custom-ticks-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class CustomTicksSliderComponent {
  value: number = 55;
  options: Options = {
    floor: 0,
    ceil: 100,
    ticksArray: [0, 10, 25, 50, 100]
  };
}
