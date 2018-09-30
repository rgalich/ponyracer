import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../shared/alert/alert.component';
import { FormControlValidationDirective } from './form-control-validation.directive';
import { FormLabelDirective } from './form-label.directive';
import { FormLabelValidationDirective } from './form-label-validation.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertComponent,
    FormControlValidationDirective,
    FormLabelDirective,
    FormLabelValidationDirective
  ],
  exports: [
    AlertComponent,
    FormControlValidationDirective,
    FormLabelDirective
  ]
})
export class SharedModule { }
