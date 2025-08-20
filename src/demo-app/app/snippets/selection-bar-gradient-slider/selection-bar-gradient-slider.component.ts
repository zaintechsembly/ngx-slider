import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-selection-bar-gradient-slider',
  templateUrl: './selection-bar-gradient-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class SelectionBarGradientSliderComponent {
  minValue: number = 0;
  maxValue: number = 80;
  options: Options = {
    ceil: 100,
    showSelectionBar: true,
    selectionBarGradient: {
      from: 'white',
      to: '#FC0'
    }
  };
}
