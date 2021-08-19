import { AddressModel } from "./address.model";

export class CustomerInfoModel{
    title:string;
    firstName:string;
    middleName:string;
    lastName:string;
    addresses:Array<AddressModel>;
    homeStdCode:string;
    homePhone:string;
    officeStdCode:string
    officePhone:string;
    isdCode:string;
    mobilePhone:string;
    emailPersonal:string;
    emailOfficial:string;
    pan:string;
    adhaarnumber:number;
    dob:Date;
    customerType:string;
}