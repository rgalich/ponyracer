import { FormLabelDirective } from './form-label.directive';
import { NgControl } from '@angular/forms';
import { Directive, ContentChild, AfterContentInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[.form-group]'
})
export class FormLabelValidationDirective implements AfterContentInit {

  constructor() { }

  @ContentChild(NgControl) ngControl: NgControl;
  @ContentChild(FormLabelDirective) label: FormLabelDirective;

  setLabelValidity() {
    this.label.isInvalid = this.ngControl.invalid && this.ngControl.dirty;
  }

  ngAfterContentInit() {
    if (this.ngControl && this.label) {
      this.setLabelValidity();
      this.ngControl.statusChanges.subscribe(() => this.setLabelValidity);
    }
  }

}
