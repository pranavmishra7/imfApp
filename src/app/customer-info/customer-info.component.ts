import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
  
})
export class CustomerInfoComponent implements OnInit {
  showCard: boolean = true;
  constructor() { }

  ngOnInit() {
    this.showCard = true
  }
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
  toggleCard(event:any) {
    console.log(event)
    console.log("show card is: " + this.showCard)
    this.showCard = this.showCard ? false : true;
    if (this.showCard) {
      event.srcElement.classList.add("show");
      event.srcElement.classList.remove("hide");
    }
    else {
      event.srcElement.classList.add("hide");
      event.srcElement.classList.remove("show");
    }

  }
}
