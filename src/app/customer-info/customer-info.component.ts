import { Component, OnInit } from '@angular/core';
import { CustomerInfoModel } from '../Models/customer-info.model';
import { AddressModel } from '../Models/address.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
  providers: [CustomerInfoModel, AddressModel]

})
export class CustomerInfoComponent implements OnInit {
  showCard: boolean = true;
  // customerInfoModel:CustomerInfoModel;
  // corAddress:AddressModel;
  // perAddress:AddressModel;
  addresses: Array<AddressModel> = []
  constructor(
    public customerInfoModel: CustomerInfoModel,
    public corAddress: AddressModel,
    public perAddress: AddressModel
  ) {
    // this.customerInfo=_customerInfo;
    this.corAddress = new AddressModel();
    this.perAddress = new AddressModel();
  }

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
  toggleCard(event: any) {
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
  addCustomer(customerForm: NgForm) {

    if (customerForm.invalid) {
      // alert("invalid Data")
    }
    else {
      this.perAddress.addressType = "Permanent";
      this.addresses.push(this.perAddress);
      this.corAddress.addressType = "Corrospondence";
      this.addresses.push(this.corAddress);
      this.customerInfoModel.addresses = this.addresses;
      localStorage.setItem("CustomerData", JSON.stringify(this.customerInfoModel))
    }

  }
  copyAddress(event) {
    this.perAddress = event.target.checked ? this.corAddress : new AddressModel();
  }
  resetform(customerForm: NgForm) {
    customerForm.reset();
  }
}
