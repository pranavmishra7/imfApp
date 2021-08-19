import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CustomerInfoModel } from '../../Models/customer-info.model';
import { AddressModel } from '../../Models/address.model';
import { NgForm } from '@angular/forms';
import { ToastLoadController } from '../../shared/load.toast.controller'
import { CommonService } from 'src/app/shared/services/common.service';
import { UniversalService } from 'src/app/shared/services/universalservices/universal.service';

@Component({
  selector: 'app-policy-holder',
  templateUrl: './policy-holder.component.html',
  styleUrls: ['./policy-holder.component.scss'],
})
export class PolicyHolderComponent implements OnInit {
  countries: any = [];
  showCard: boolean = true;
  title: string;
  addresses: Array<AddressModel> = []
  maxDate: any = new Date(new Date().setFullYear(new Date().getFullYear())).toISOString();
  @ViewChild('customerForm') public userFrm: NgForm;
  states: any = [];
  cities: any = [];
  isdCodes: any = [];
  constructor(
    public customerInfoModel: CustomerInfoModel,
    public corAddress: AddressModel,
    public perAddress: AddressModel,
    public toastLoadController: ToastLoadController,
    public _commonService: CommonService,
    public _universalService: UniversalService
  ) {
    this.corAddress = new AddressModel();
    this.perAddress = new AddressModel();
    this._commonService.sharedData.subscribe(value => {
      if (this.userFrm) {
        console.log(value);
        switch (value) {
          case "save": {
            this.userFrm.ngSubmit.emit()
            break;
          }
          case "reset": {
            this.resetform(this.userFrm)
            break;
          }
          default: {
            //statements; 
            break;
          }
        }

      }

    })
  }


  ngOnInit() {
    this.showCard = true
    this.title = "Policy Holder";
    this.getCountries();
    this.getCountryCodes();
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
      this.toastLoadController.presentLoadingWithOptions();
      this.perAddress.addressType = "Permanent";
      this.addresses.push(this.perAddress);
      this.corAddress.addressType = "Corrospondence";
      this.addresses.push(this.corAddress);
      this.customerInfoModel.addresses = this.addresses;
      localStorage.setItem("PolicyHOlder", JSON.stringify(this.customerInfoModel))
      this._commonService.customerName = this.customerInfoModel.title + " " + this.customerInfoModel.firstName + " " + this.customerInfoModel.lastName;
      this.resetform(customerForm);
      this._commonService.changeTab("lifeInsured")
      // this.toastLoadController.presentToastWithOptions();
    }

  }
  copyAddress(event) {
    this.perAddress = event.target.checked ? this.corAddress : new AddressModel();
  }
  resetform(customerForm: NgForm) {
    customerForm.resetForm();
  }
  getCountries() {
    this._universalService.getCountries().subscribe(response => {
      this.countries = response;
    })
  }
  getstates(country: string) {

    this._universalService.getStates(country).subscribe(response => {
      this.states = response["data"].states;
    })
  }
  getcities(country: string, state: string) {
    this._universalService.getCities(country, state).subscribe(response => {
      this.cities = response;
    })
  }
  getCountryCodes() {
    this._universalService.getIsdCodes().subscribe(response => {
      this.isdCodes = response;
    })
  }

}

