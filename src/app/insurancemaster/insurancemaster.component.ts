import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsuranceMaster } from '../Models/insurance.master.model';
import { InsuranceCategoryModel } from '../Models/insurance.category.model';
import { InsurancePlanModel } from '../Models/insurance.plan.model';
import { MongoService } from '../shared/services/mongo.service';
import { Platform } from '@ionic/angular'
import { InsuranceMasterService } from '../shared/services/insurance.master.service';
import { ToastLoadController } from '../shared/load.toast.controller';
@Component({
  selector: 'app-insurancemaster',
  templateUrl: './insurancemaster.component.html',
  styleUrls: ['./insurancemaster.component.scss'],
  providers: [InsuranceMaster, InsuranceMaster, InsuranceCategoryModel, InsurancePlanModel, MongoService, InsuranceMasterService]
})
export class InsurancemasterComponent implements OnInit {
  productCategories: string[] = [];
  planCategories: string[] = [];
  manufacturers: string[] = [];
  selectInterface: string = "popover";
  insuranceCategories: Array<InsuranceCategoryModel> = []
  insurancePlans: Array<InsurancePlanModel> = [];
  // motorInsurancePlan:Array<InsurancePlanModel>=[];
  // healthInsurancePlan:Array<InsurancePlanModel>=[];
  // travelInsurancePlan:Array<InsurancePlanModel>=[];
  // propertyInsurancePlan:Array<InsurancePlanModel>=[];
  // mobileInsurancePlan:Array<InsurancePlanModel>=[];
  // cycleInsurancePlan:Array<InsurancePlanModel>=[];
  // bytesizeInsurancePlan:Array<InsurancePlanModel>=[];
  constructor(
    public insuranceMasterModel: InsuranceMaster,
    public insuranceCategory: InsuranceCategoryModel,
    public _mongoservice: MongoService,
    public _platform: Platform,
    public _insuranceMasterService: InsuranceMasterService,
    public toastLoadController: ToastLoadController,
    public insurancePlan: InsurancePlanModel
  ) {
    //_mongoservice.connectdb();
    let platforms = _platform.platforms()
  }

  ngOnInit() {
    this.insuranceCategory = new InsuranceCategoryModel();
    this.insurancePlans = [];
    this.getInsuranceCategories();
  }

  getInsuranceCategories() {
    this._insuranceMasterService.getInsuraceCategories().subscribe(response => {
      this.insuranceCategories = response
    })
  }
  getInsurancePlans(name: string) {
    if (name.length > 0) {
      this.insuranceCategory = this.insuranceCategories.find(x => x.name == name)
      if (this.insuranceCategory != undefined) {
        this._insuranceMasterService.getInsuracePlans(this.insuranceCategory.id).subscribe(response => {
          this.insurancePlans = response
        })
      }
    } else {
      this.insurancePlans = [];
      this.getInsuranceCategories();
      this.insuranceCategory = new InsuranceCategoryModel();
    }

  }
  addInsurancePlan(_insurancePlan: InsurancePlanModel) {
    if (_insurancePlan.name && _insurancePlan.name.length > 0) {
      let insuranceplan = new InsurancePlanModel();
      insuranceplan.name = _insurancePlan.name;
      insuranceplan.isActive = true;
      insuranceplan.insuranceCategoryId= this.insuranceCategory.id;
      this.insurancePlans.push(insuranceplan);
      this.insurancePlan= new InsurancePlanModel()
    }
  }
  saveInsuranceCategory(form: NgForm) {
    if (form.valid) {
      this.insuranceCategory.isActive = true;
      this.toastLoadController.presentLoading()
      this._insuranceMasterService.postInsuraceCategory(this.insuranceCategory).subscribe(response => {
        if (response) {
          this.insuranceCategory = response;
          this.getInsuranceCategories();
          this.toastLoadController.presentToast(true);
        }
      })
    }
  }

  saveInsurancePlan(insurancePlanForm:NgForm){
    if(insurancePlanForm.valid){
      this.toastLoadController.presentLoading()
      this._insuranceMasterService.postInsuraceplans(this.insurancePlans).subscribe(response=>{
        if(response){
          this.insurancePlans=response;
          this.toastLoadController.presentToast(true);
        }
      })
    }

  }

  selectCategory(_insuranceCategory: InsuranceCategoryModel) {
    this.insuranceCategory = JSON.parse(JSON.stringify(_insuranceCategory));
  }
  initModel() {
    this.insuranceCategory = new InsuranceCategoryModel();
  }
  selectPlan(_insuranceplan) {
    this.insurancePlan = _insuranceplan;
  }
  clearCategory(name:string){
    if(!name || name.length==0){
      this.initModel();
    }
  }
}
