import { InsuranceCategoryModel } from "./insurance.category.model";
import { InsurancePlanModel } from "./insurance.plan.model";
import { PremiumGst } from "./premiumGst.model";

export class InsuranceDetailsModel{
    id:string;
    productCategory:InsuranceCategoryModel;
    productPlans:Array<InsurancePlanModel>=[];
    insuranceProvider:string;
    policyName:string;
    sumAssured:number;
    premiumPayingTerm:number;
    policyTerm:number;
    premiumPayingMode:number;
    modalPremium:number;
    annualizedPremium:number;
    gst:Array<PremiumGst>;
}