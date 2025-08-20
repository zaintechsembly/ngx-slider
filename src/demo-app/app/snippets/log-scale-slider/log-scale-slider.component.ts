import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-log-scale-slider',
  templateUrl: './log-scale-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class LogScaleSliderComponent {
  value: number = 1;
  options: Options = {
    floor: 1,
    ceil: 100,
    logScale: true,
    showTicks: true
  };
}
