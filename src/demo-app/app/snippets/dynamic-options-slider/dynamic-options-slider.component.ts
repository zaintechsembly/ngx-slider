import { Component } from '@angular/core';
import { Options, SliderComponent } from '@local/ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dynamic-options-slider',
  templateUrl: './dynamic-options-slider.component.html',
  standalone: true,
  imports: [
    SliderComponent,
    NgbModule
  ]
})
export class DynamicOptionsSliderComponent {
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 250
  };

  setNewCeil(newCeil: number): void {
    // Due to change detection rules in Angular, we need to re-create the options object to apply the change
    const newOptions: Options = Object.assign({}, this.options);
    newOptions.ceil = newCeil;
    this.options = newOptions;
  }
}
