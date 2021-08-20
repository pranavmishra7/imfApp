import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerInfoModel } from '../../Models/customer-info.model';
import { AddressModel } from '../../Models/address.model';
import { NgForm } from '@angular/forms';
import { ToastLoadController } from '../../shared/load.toast.controller'
import { CommonService } from 'src/app/shared/services/common.service';
import { UniversalService } from 'src/app/shared/services/universalservices/universal.service';
import { NomineeModel } from 'src/app/Models/nominee.model';

@Component({
  selector: 'app-nominee',
  templateUrl: './nominee.component.html',
  styleUrls: ['./nominee.component.scss'],
})
export class NomineeComponent implements OnInit {

  countries: any = [];
  showCard: boolean = true;
  title: string;
  addresses: Array<AddressModel> = []
  maxDate: any = new Date(new Date().setFullYear(new Date().getFullYear())).toISOString();
  states: any = [];
  cities: any = [];
  isdCodes: any = [];
  nominees: Array<NomineeModel> = [];
  @ViewChild('customerForm') public userFrm: NgForm;
  constructor(
    public customerInfoModel: CustomerInfoModel,
    public address: AddressModel,
    public toastLoadController: ToastLoadController,
    public _commonService: CommonService,
    public _universalService: UniversalService
  ) {
    this.address = new AddressModel();
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
    //this.nominees.push(new NomineeModel())
    if (localStorage.getItem("PolicyHOlder").length > 0) {
      this.showCard = true
      this.title = "Policy Holder";
    }
    else {
      alert("Add policy holder first");
    }
    this.getCountries()
    this.getCountryCodes();
  }
  onCountryChange($event) {
    console.log($event)
  }
  addCustomer(customerForm: NgForm) {

    if (customerForm.invalid) {
      // alert("invalid Data")
    }
    else {
      // this.toastLoadController.presentLoadingWithOptions();
      // this.perAddress.addressType = "Permanent";
      // this.addresses.push(this.perAddress);
      // this.corAddress.addressType = "Corrospondence";
      // this.customerInfoModel.addresses = this.addresses;
      // localStorage.setItem("LifeInsured", JSON.stringify(this.customerInfoModel))
      // this.resetform(customerForm);
      // this.toastLoadController.presentToastWithOptions();
    }

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
  createNominees() {
    let nominee = new NomineeModel();
    this.nominees.push(nominee)
  }
}