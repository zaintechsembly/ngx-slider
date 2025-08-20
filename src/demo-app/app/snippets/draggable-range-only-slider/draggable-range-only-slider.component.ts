import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-draggable-range-only-slider',
  templateUrl: './draggable-range-only-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class DraggableRangeOnlySliderComponent {
  minValue: number = 4;
  maxValue: number = 6;
  options: Options = {
    floor: 0,
    ceil: 10,
    draggableRangeOnly: true
  };
}
