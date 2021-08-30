import { InsurancePlanModel } from "./insurance.plan.model";

export class InsuranceCategoryModel{
    id:string;
    name:string;
    insurancePlans:Array<InsurancePlanModel>;
    isActive:boolean;
    isSelected:boolean
}