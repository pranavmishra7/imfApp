import { InsurancePlanModel } from "./insurance.plan.model";

export class InsuranceCategoryModel{
    id:string;
    name:string;
    plan:Array<InsurancePlanModel>
}