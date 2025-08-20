import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form-range-slider',
  templateUrl: './reactive-form-range-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ReactiveFormRangeSliderComponent {
  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([20, 80])
  });
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 5
  };

  resetForm(): void {
    this.sliderForm.reset({sliderControl: [20, 80]});
  }
}
