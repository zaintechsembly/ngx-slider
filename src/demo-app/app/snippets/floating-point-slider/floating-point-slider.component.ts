import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-floating-point-slider',
  templateUrl: './floating-point-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class FloatingPointSliderComponent {
  value: number = 0.5;
  options: Options = {
    floor: 0,
    ceil: 2,
    step: 0.1
  };
}
