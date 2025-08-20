import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-limited-slider',
  templateUrl: './limited-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class LimitedSliderComponent {
  value: number = 50;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    minLimit: 10,
    maxLimit: 90
  };
}
