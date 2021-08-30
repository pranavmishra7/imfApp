import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsuranceMaster } from '../Models/insurance.master.model';
import { InsuranceCategoryModel } from '../Models/insurance.category.model';
import { InsurancePlanModel } from '../Models/insurance.plan.model';
import { MongoService } from '../shared/services/mongo.service';
import { Platform } from '@ionic/angular'
import { InsuranceMasterService } from '../shared/services/insurance.master.service';
import { ToastLoadController } from '../shared/load.toast.controller';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
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
  getInsurancePlans(id: string) {
    //if (name.length > 0) {
    //this.insuranceCategory = this.insuranceCategories.find(x => x.name == name)
    if (this.insuranceCategory != undefined) {
      this._insuranceMasterService.getInsuracePlans(id).subscribe(response => {
        this.insurancePlans = response
      })
    }
    // } else {
    //   this.insurancePlans = [];
    //   this.getInsuranceCategories();
    //   this.insuranceCategory = new InsuranceCategoryModel();
    // }

  }
  addInsurancePlan(_insurancePlan: InsurancePlanModel) {
    if (_insurancePlan.id) {
      var foundIndex = this.insurancePlans.findIndex(x => x.id == _insurancePlan.id);
      this.insurancePlans[foundIndex] = _insurancePlan;
      this.insurancePlan = new InsurancePlanModel();
    }
    else if (_insurancePlan.name && _insurancePlan.name.length > 0) {
      let insuranceplan = new InsurancePlanModel();
      insuranceplan.name = _insurancePlan.name;
      insuranceplan.isActive = true;
      insuranceplan.insuranceCategoryId = this.insuranceCategory.id;
      this.insurancePlans.push(insuranceplan);
      this.insurancePlan = new InsurancePlanModel()
    }
  }
  saveInsuranceCategory(form: NgForm) {
    if (form.valid) {
      this.insuranceCategory.isActive = true;
      this.toastLoadController.presentLoading("Saving")
      this._insuranceMasterService.postInsuraceCategory(this.insuranceCategory).subscribe(response => {
        if (response) {
          this.insuranceCategory = response;
          this.getInsuranceCategories();
          this.toastLoadController.presentToast(true, "Saved Successfully");
          this.insuranceCategory.isSelected=false;
          form.resetForm();
        }
      })
    }
  }

  saveInsurancePlan(insurancePlanForm: NgForm) {
    if (insurancePlanForm.valid) {
      this.toastLoadController.presentLoading("Saving")
      this._insuranceMasterService.postInsuraceplans(this.insurancePlans).subscribe(response => {
        if (response) {
          this.insurancePlans = response;
          this.toastLoadController.presentToast(true, "Saved Successfully");
          this.getInsurancePlans(this.insuranceCategory.id)
          this.insurancePlan.isSelected=false;
        }
      })
    }

  }

  DeleteConfirmation(id: string, entity: string) {
    this.toastLoadController.Alert.confirm("Do you want to delete", "Delete Confirmation").then(res => {
      switch (entity) {
        case "Category":
          this.removeCategory(id);
          break;
        case "Plan":
          this.removePlan(id);
          break;
        default:
          break;
      }
    }, err => {
      console.log("cancelled")
    })

  }
  removeCategory(id: string) {
    this.toastLoadController.presentLoading("Deleting")
    this._insuranceMasterService.deletInsuraceCategory(id).subscribe(response => {
      if (response) {
        this.toastLoadController.presentToast(true, "Deleted Successfully");
        this.getInsuranceCategories();
        this.insurancePlans = [];
        this.insuranceCategory= new InsuranceCategoryModel();
      }
    })
  }
  removePlan(id: string) {
    this.toastLoadController.presentLoading("Deleting")
    this._insuranceMasterService.deleteInsuracePlan(id).subscribe(response => {
      if (response) {
        this.toastLoadController.presentToast(true, "Deleted Successfully");
        this.getInsurancePlans(this.insuranceCategory.id);
      }
    })
  }
  selectCategory(_insuranceCategory: InsuranceCategoryModel) {
    _insuranceCategory.isSelected=true;
    this.insuranceCategory = JSON.parse(JSON.stringify(_insuranceCategory));
    this.getInsurancePlans(_insuranceCategory.id);
  }
  initModel() {
    this.insuranceCategory = new InsuranceCategoryModel();
  }
  selectPlan(_insuranceplan) {
    _insuranceplan.isSelected= true;
    this.insurancePlan = JSON.parse(JSON.stringify(_insuranceplan));
  }
  clearCategory(name: string) {
    if (!name || name.length == 0) {
      this.initModel();
    }
  }
}
