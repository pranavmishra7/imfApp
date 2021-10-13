import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuranceCategoryModel } from 'src/app/Models/insurance.category.model';
import { InsurancePlanModel } from 'src/app/Models/insurance.plan.model';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class InsuranceMasterService {
  public reqHeader:any
  constructor(
    public config:AppConfig,
    private http: HttpClient,
    ) { 
        this.reqHeader = new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"
        });
    }

  public postInsuraceCategory(insuranceCategories:InsuranceCategoryModel):Observable<any>{
    const url = this.config.baseurl+this.config.category;
    return this.http.post(url, insuranceCategories, {headers:this.reqHeader})
  }
  public getInsuraceCategories(orderBy?:string, direction?:string):Observable<any>{
    let orderQuery="?orderBy="+orderBy+"&"+"direction="+direction;
    const url = this.config.baseurl+this.config.category+"?orderBy="+orderBy+"&"+"direction="+direction;
    return this.http.get(url,  {headers:this.reqHeader})
  }
  public getInsuracePlans(id:string, orderBy?:string, direction?:string):Observable<any>{
    let orderQuery="&orderBy="+orderBy+"&"+"direction="+direction;
    const url = this.config.baseurl+this.config.plans+"?categoryId="+id+orderQuery;
    return this.http.get(url,  {headers:this.reqHeader})
  }
  public postInsuraceplans(insurancePlans:Array<InsurancePlanModel>):Observable<any>{
    const url = this.config.baseurl+this.config.plans;
    return this.http.post(url, insurancePlans, {headers:this.reqHeader})
  }

  public deletInsuraceCategory(id:string):Observable<any>{
    const url = this.config.baseurl+this.config.category+"?id="+id;
    return this.http.delete(url,{headers:this.reqHeader})
  }
  public deleteInsuracePlan(id:string):Observable<any>{
    const url = this.config.baseurl+this.config.plans+"?id="+id;
    return this.http.delete(url,{headers:this.reqHeader})
  }
}
