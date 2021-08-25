import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuranceCategoryModel } from 'src/app/Models/insurance.category.model';
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
            "Content-Type": "application/json"
        });
    }

  public postInsuraceCategory(insuranceCategories:InsuranceCategoryModel){
    const url = this.config.baseurl+this.config.category;
    return this.http.post(url, insuranceCategories, {headers:this.reqHeader})
  }
  public getInsuraceCategories():Observable<any>{
    const url = this.config.baseurl+this.config.category;
    return this.http.get(url,  {headers:this.reqHeader})
  }
  public getInsuracePlans(id:string):Observable<any>{
    const url = this.config.baseurl+this.config.plans+"?categoryId="+id;
    return this.http.get(url,  {headers:this.reqHeader})
  }
}
