import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-right-to-left-slider',
  templateUrl: './right-to-left-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class RightToLeftSliderComponent {
  value: number = 20;
  options: Options = {
    floor: 10,
    ceil: 100,
    step: 5,
    rightToLeft: true
  };
}
