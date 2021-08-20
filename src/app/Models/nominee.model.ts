import { AddressModel } from "./address.model";

export class NomineeModel{
    title:string;
    firstName:string;
    middleName:string;
    lastName:string;
    dob:Date;
    relationsip:string;
    address:AddressModel;
    share:number
}