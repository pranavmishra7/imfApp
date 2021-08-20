import { NgModule } from '@angular/core';
import { IntegerInputDirective } from './integer.input';
import { TwoDigitDecimaNumberDirective } from './twoDigitDecimal';

@NgModule({
  imports: [],
  declarations: [IntegerInputDirective, TwoDigitDecimaNumberDirective],
  exports: [IntegerInputDirective]
})
export class DirectivesModule { }