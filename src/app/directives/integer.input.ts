import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'ion-input[IntegerInput]'
})
export class IntegerInputDirective {

    constructor(private _el: ElementRef) { }

    @HostListener('keydown', ['$event']) onInputChange(evt:KeyboardEvent) {
  
        if (evt.which === 9 ) {
            return true;
        }
      if (evt.which === 8 || evt.which === 0) {
          return true;
      }
  
      const regex = new RegExp("^[0-9\~]*$");
      var key = String.fromCharCode(!evt.keyCode ? evt.which : evt.keyCode);
      // console.log(regex.test(key))
      if (!regex.test(key)) {
          evt.preventDefault();
          return false;
      }
      return true;
    }
}