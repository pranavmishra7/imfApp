import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerInfoModel } from '../../Models/customer-info.model';
import { AddressModel } from '../../Models/address.model';
import { NgForm } from '@angular/forms';
import { ToastLoadController } from '../../shared/load.toast.controller'
import { CommonService } from 'src/app/shared/services/common.service';
@Component({
  selector: 'app-policy-holder',
  templateUrl: './policy-holder.component.html',
  styleUrls: ['./policy-holder.component.scss'],
})
export class PolicyHolderComponent implements OnInit {

  showCard: boolean = true;
  title: string;
  addresses: Array<AddressModel> = []
  maxDate: any = new Date(new Date().setFullYear(new Date().getFullYear())).toISOString();
  @ViewChild('customerForm') public userFrm: NgForm;
  constructor(
    public customerInfoModel: CustomerInfoModel,
    public corAddress: AddressModel,
    public perAddress: AddressModel,
    public toastLoadController: ToastLoadController,
    public _commonService: CommonService
  ) {
    this.corAddress = new AddressModel();
    this.perAddress = new AddressModel();
    this._commonService.sharedData.subscribe(value => {
      if (this.userFrm) {
        this.userFrm.ngSubmit.emit()
      }

    })
  }

  ngOnInit() {
    this.showCard = true
    this.title = "Policy Holder";
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
      this.resetform(customerForm);
      // this.toastLoadController.presentToastWithOptions();
    }

  }
  copyAddress(event) {
    this.perAddress = event.target.checked ? this.corAddress : new AddressModel();
  }
  resetform(customerForm: NgForm) {
    customerForm.resetForm();
  }


}
