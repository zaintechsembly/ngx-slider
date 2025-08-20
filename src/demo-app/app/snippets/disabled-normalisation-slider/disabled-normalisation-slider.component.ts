import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-disabled-normalisation-slider',
  templateUrl: './disabled-normalisation-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule,
    CommonModule,
    FormsModule
  ]
})
export class DisabledNormalisationSliderComponent {
  minValue: number = 50;
  maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 250,
    step: 10,
    enforceStep: false,
    enforceRange: false,
  };
}
