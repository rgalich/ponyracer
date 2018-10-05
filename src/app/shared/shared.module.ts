import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlValidationDirective } from './form-control-validation.directive';
import { FormLabelDirective } from './form-label.directive';
import { FormLabelValidationDirective } from './form-label-validation.directive';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormControlValidationDirective,
    FormLabelDirective,
    FormLabelValidationDirective
  ],
  exports: [
    NgbAlertModule,
    FormControlValidationDirective,
    FormLabelDirective,
    FormLabelValidationDirective,
    NgbPaginationModule
  ]
})
export class SharedModule { }
