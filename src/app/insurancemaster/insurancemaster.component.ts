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

  lifeInsurancePlan: Array<InsurancePlanModel> = [];
  // motorInsurancePlan:Array<InsurancePlanModel>=[];
  // healthInsurancePlan:Array<InsurancePlanModel>=[];
  // travelInsurancePlan:Array<InsurancePlanModel>=[];
  // propertyInsurancePlan:Array<InsurancePlanModel>=[];
  // mobileInsurancePlan:Array<InsurancePlanModel>=[];
  // cycleInsurancePlan:Array<InsurancePlanModel>=[];
  // bytesizeInsurancePlan:Array<InsurancePlanModel>=[];
  constructor(
    public insuranceMasterModel: InsuranceMaster,
    public insuranceplanModel: InsurancePlanModel,
    public insuranceCategory: InsuranceCategoryModel,
    public _mongoservice: MongoService,
    public _platform: Platform,
    public _insuranceMasterService: InsuranceMasterService,
    public toastLoadController: ToastLoadController,
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
  getInsurancePlans(id:string){
    this._insuranceMasterService.getInsuracePlans(id).subscribe(response=>{
      this.insurancePlans=response
    })
  }
  addInsurancePlan(name: string) {
    if (name && name.length > 0) {
      let insuranceplan = new InsurancePlanModel();
      insuranceplan.name = name;
      insuranceplan.isActive = true;
      this.insurancePlans.push(insuranceplan);
      this.insuranceplanModel.name = "";
      this.insuranceCategory.insurancePlans = this.insurancePlans;
    }
    else {
      alert("Invalid Input")
    }
  }
  saveInsuranceCategory(form: NgForm) {
    if (form.valid) {
      this.insuranceCategory.isActive = true;
      this.toastLoadController.presentLoading()
      this._insuranceMasterService.postInsuraceCategory(this.insuranceCategory).subscribe(response => {
        if (response) {

          this.toastLoadController.presentToast(true);
        }
      })
    }
  }
  resetModel(modelname: string) {
    switch (modelname) {
      case "insuranceCategory":
        this.insuranceCategory = new InsuranceCategoryModel();
        this.insurancePlans = [];
        break;

      default:
        break;
    }
  }
  setInsurancecategory(id: string) {
    this.insuranceCategory = this.insuranceCategories.find(x => x.name == id)
    this. getInsurancePlans(this.insuranceCategory.id)
  }
}
