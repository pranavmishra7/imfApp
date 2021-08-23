import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsuranceMaster } from '../Models/insurance.master.model';
import { InsurancemasterService } from '../shared/services/insurancemaster.service';
import { InsuranceCategoryModel } from '../Models/insurance.category.model';
import { InsurancePlanModel } from '../Models/insurance.plan.model';
@Component({
  selector: 'app-insurancemaster',
  templateUrl: './insurancemaster.component.html',
  styleUrls: ['./insurancemaster.component.scss'],
  providers: [InsuranceMaster, InsuranceMaster, InsuranceCategoryModel, InsurancePlanModel]
})
export class InsurancemasterComponent implements OnInit {
  productCategories: string[] = [];
  planCategories: string[] = [];
  manufacturers: string[] = [];
  selectInterface: string = "popover";
  constructor(
    public _insuranceMasterService: InsurancemasterService,
    public insuranceMasterModel: InsuranceMaster,
    public insuranceplanModel: InsurancePlanModel,
    public insuranceCategoryModel: InsuranceCategoryModel) { }

  ngOnInit() {
    this.productCategories.push("Life Insurance")
    this.productCategories.push("Motor insurance")
    this.productCategories.push("Health Insurance")
    this.productCategories.push("Travel insurance")
    this.productCategories.push("Property insurance")
    this.productCategories.push("Mobile insurance")
    this.productCategories.push("Cycle insurance")
    this.productCategories.push("Bite-size insurance")
  }
  addInsurance(InsuranceForm: NgForm) {

  }
  getInsurancePlan() {

  }
  getInsuranceCategory() {

  }
}
