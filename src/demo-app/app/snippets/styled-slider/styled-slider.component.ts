import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-styled-slider',
  templateUrl: './styled-slider.component.html',
  styleUrls: ['./styled-slider.component.scss'],
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class StyledSliderComponent {
  minValue: number = 10;
  maxValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true
  };
}
