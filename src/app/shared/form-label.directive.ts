import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[prFormLabel]'
})
export class FormLabelDirective {

  constructor() { }

  @HostBinding('class.text-danger') isInvalid = false;

}
