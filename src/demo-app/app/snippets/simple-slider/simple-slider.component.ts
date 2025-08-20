import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simple-slider',
  templateUrl: './simple-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule,
    FormsModule
  ]
})
export class SimpleSliderComponent {
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 250
  };
}
