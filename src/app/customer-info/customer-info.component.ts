import { Component, OnInit } from '@angular/core';
import { CustomerInfoModel } from '../Models/customer-info.model';
import { AddressModel } from '../Models/address.model';
import { NgForm } from '@angular/forms';
import {ToastLoadController} from '../shared/load.toast.controller'
import { CommonService } from '../shared/services/common.service';
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
  title:string;
 
  addresses: Array<AddressModel> = []
  maxDate: any = new Date(new Date().setFullYear(new Date().getFullYear())).toISOString();
  constructor(
    public customerInfoModel: CustomerInfoModel,
    public corAddress: AddressModel,
    public perAddress: AddressModel,
    public toastLoadController:ToastLoadController,
    public _commonService:CommonService
  ) {
    // this.customerInfo=_customerInfo;
    this.corAddress = new AddressModel();
    this.perAddress = new AddressModel();
    
  }

  ngOnInit() {
    this.showCard = true
    this.title="Policy Holder";
    this._commonService.changeTab("policyHolder");
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
  // toggleCard(event: any) {
  //   console.log(event)
  //   console.log("show card is: " + this.showCard)
  //   this.showCard = this.showCard ? false : true;
  //   if (this.showCard) {
  //     event.srcElement.classList.add("show");
  //     event.srcElement.classList.remove("hide");
  //   }
  //   else {
  //     event.srcElement.classList.add("hide");
  //     event.srcElement.classList.remove("show");
  //   }

  // }
  callCommonService(value:string){
    this._commonService.callComponentMetod(value);  
  }
  // addCustomer(customerForm: NgForm) {
  //  this._commonService.callComponentMetod();
  // }
  copyAddress(event) {
    this.perAddress = event.target.checked ? this.corAddress : new AddressModel();
  }
  resetform(customerForm: NgForm) {
    customerForm.resetForm();
  }

}
