import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-simple-slider',
  templateUrl: './reactive-form-simple-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ReactiveFormSimpleSliderComponent {
  sliderControl: FormControl = new FormControl(100);

  options: Options = {
    floor: 0,
    ceil: 250
  };

  resetForm(): void {
    this.sliderControl.reset(100);
  }
}
