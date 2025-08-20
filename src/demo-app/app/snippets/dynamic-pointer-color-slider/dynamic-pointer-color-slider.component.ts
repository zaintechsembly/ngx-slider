import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dynamic-pointer-color-slider',
  templateUrl: 'dynamic-pointer-color-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class DynamicPointerColorSliderComponent {
  value: number = 12;
  options: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    getPointerColor: (value: number): string => {
        if (value <= 3) {
            return 'red';
        }
        if (value <= 6) {
            return 'orange';
        }
        if (value <= 9) {
            return 'yellow';
        }
        return '#2AE02A';
    }
  };
}
