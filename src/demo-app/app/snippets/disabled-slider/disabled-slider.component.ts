import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-disabled-slider',
  templateUrl: './disabled-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule,
    FormsModule
  ]
})
export class DisabledSliderComponent {
  disabled: boolean = true;
  minValue: number = 10;
  maxValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    disabled: true,
    showTicks: true,
    draggableRange: true
  };

  /* Due to the way Angular 2+ handles change detection, we have to create a new options object. */
  onChangeDisabled(): void {
    this.options = Object.assign({}, this.options, {disabled: this.disabled});
  }
}
