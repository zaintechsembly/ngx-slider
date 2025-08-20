import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-selection-bar-at-end-slider',
  templateUrl: './selection-bar-at-end-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class SelectionBarAtEndSliderComponent {
  value: number = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBarEnd: true
  };
}
