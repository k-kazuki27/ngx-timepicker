import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { TimepickerActions } from './reducer/timepicker.actions';
import { TimepickerStore } from './reducer/timepicker.store';
import { TimepickerComponent } from './timepicker.component';
import { TimepickerConfig } from './timepicker.config';

@NgModule({
  imports: [CommonModule],
  declarations: [TimepickerComponent],
  exports: [TimepickerComponent]
})
export class TimepickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TimepickerModule,
      providers: [TimepickerConfig, TimepickerActions, TimepickerStore]
    };
  }
}
