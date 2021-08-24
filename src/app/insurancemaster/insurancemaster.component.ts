import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsuranceMaster } from '../Models/insurance.master.model';
import { InsurancemasterService } from '../shared/services/insurancemaster.service';
import { InsuranceCategoryModel } from '../Models/insurance.category.model';
import { InsurancePlanModel } from '../Models/insurance.plan.model';
import { MongoService } from '../shared/services/mongo.service';
@Component({
  selector: 'app-insurancemaster',
  templateUrl: './insurancemaster.component.html',
  styleUrls: ['./insurancemaster.component.scss'],
  providers: [InsuranceMaster, InsuranceMaster, InsuranceCategoryModel, InsurancePlanModel, MongoService]
})
export class InsurancemasterComponent implements OnInit {
  productCategories: string[] = [];
  planCategories: string[] = [];
  manufacturers: string[] = [];
  selectInterface: string = "popover";
  insuranceCategories:Array<InsuranceCategoryModel>=[]
  insurancePlans:Array<InsurancePlanModel>=[];

  lifeInsurancePlan:Array<InsurancePlanModel>=[];
  // motorInsurancePlan:Array<InsurancePlanModel>=[];
  // healthInsurancePlan:Array<InsurancePlanModel>=[];
  // travelInsurancePlan:Array<InsurancePlanModel>=[];
  // propertyInsurancePlan:Array<InsurancePlanModel>=[];
  // mobileInsurancePlan:Array<InsurancePlanModel>=[];
  // cycleInsurancePlan:Array<InsurancePlanModel>=[];
  // bytesizeInsurancePlan:Array<InsurancePlanModel>=[];
  constructor(
    public _insuranceMasterService: InsurancemasterService,
    public insuranceMasterModel: InsuranceMaster,
    public insuranceplanModel: InsurancePlanModel,
    public insuranceCategoryModel: InsuranceCategoryModel,
    public _mongoservice:MongoService) {
      //_mongoservice.connectdb();
     }

  ngOnInit() {
    this.getInsuranceCategory()
  }
  addInsurance(InsuranceForm: NgForm) {
   
  }
  getLifeInsurancePlan():InsurancePlanModel[] {
    let termPlan=new InsurancePlanModel()
    termPlan.id="1"
    termPlan.name="Term Plan"
    this.lifeInsurancePlan.push(termPlan)

    let endowmentPlan=new InsurancePlanModel()
    endowmentPlan.id="2"
    endowmentPlan.name="Endowment Plan"
    this.lifeInsurancePlan.push(endowmentPlan)

    let ulipPlan=new InsurancePlanModel()
    ulipPlan.id="3"
    ulipPlan.name="ULIP"
    this.lifeInsurancePlan.push(ulipPlan)

    let wholeLifeInsurancePlan=new InsurancePlanModel()
    wholeLifeInsurancePlan.id="4"
    wholeLifeInsurancePlan.name="Whole Life Insurance"
    this.lifeInsurancePlan.push(wholeLifeInsurancePlan)

    let childrenPlanPlan=new InsurancePlanModel()
    childrenPlanPlan.id="5"
    childrenPlanPlan.name="Children Plan"
    this.lifeInsurancePlan.push(childrenPlanPlan)

    let moneyBackPlan=new InsurancePlanModel()
    moneyBackPlan.id="6"
    moneyBackPlan.name="Money-Back"
    this.lifeInsurancePlan.push(moneyBackPlan)

    let retirementPlan=new InsurancePlanModel()
    retirementPlan.id="7"
    retirementPlan.name="Retirement Plan"
    this.lifeInsurancePlan.push(retirementPlan)
    return this.lifeInsurancePlan;
  }

  getMotorInsurancePlan():InsurancePlanModel[]{
    this.insurancePlans=[];
    let carInsurancePlan = new InsurancePlanModel();
    carInsurancePlan.id="1";
    carInsurancePlan.name="Car Insurance";
    this.insurancePlans.push(carInsurancePlan);
    let twowheelerplan= new InsurancePlanModel();
    twowheelerplan.id="2";
    twowheelerplan.name="Two-wheeler Insurance";
    this.insurancePlans.push(twowheelerplan);
    return this.insurancePlans;
  }

  getHealthInsurancePlan():InsurancePlanModel[]{

    return this.insurancePlans;
  }

  getTravelInsurancePlan():InsurancePlanModel[]{

    return this.insurancePlans;
  }

  getPropertyInsurancePlan():InsurancePlanModel[]{

    return this.insurancePlans;
  }

  getMobileInsurancePlan():InsurancePlanModel[]{

    return this.insurancePlans;
  }

  getCycleInsurancePlan():InsurancePlanModel[]{

    return this.insurancePlans;
  }
  getBitesizeinsurancePlan():InsurancePlanModel[]{
    return this.insurancePlans;
  }
  getInsuranceCategory() {
    
    let lifeinsurance= new InsuranceCategoryModel();
    lifeinsurance.id="1";
    lifeinsurance.name="Life Insurance";
    //lifeinsurance.plan=this.getInsurancePlan();
    this.insuranceCategories.push(lifeinsurance)
  }
  getInsurancePlan(insuranceCategory){
    switch (insuranceCategory)
    {
      case 'Life Insurance':{
        this.insurancePlans= this.getLifeInsurancePlan()
        break;
      }
      default:{
        break;
      }
        
    }
  }
}
