import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stepped-slider',
  templateUrl: './stepped-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class SteppedSliderComponent {
  value: number = 12;
  options: Options = {
    floor: 10,
    ceil: 100,
    step: 5
  };
}
