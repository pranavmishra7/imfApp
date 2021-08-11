import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  hasError($event) {
    console.log($event)
  }
  getNumber($event) {
    console.log($event)
  }
  telInputObject(obj) {
    console.log(obj);
    obj.intlTelInput('setCountry', 'in');
  }
  onCountryChange($event) {
    console.log($event)
  }
}
