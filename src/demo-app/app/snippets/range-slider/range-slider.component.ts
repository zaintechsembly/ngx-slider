import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule,
    FormsModule
  ]
})
export class RangeSliderComponent {
  minValue: number = 50;
  maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 250
  };
}
