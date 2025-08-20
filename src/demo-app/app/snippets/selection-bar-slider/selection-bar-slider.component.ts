import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-selection-bar-slider',
  templateUrl: './selection-bar-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class SelectionBarSliderComponent {
  value: number = 10;
  options: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true
  };
}
