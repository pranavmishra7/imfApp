import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CommonService {
  public customerName: string
  public showPolicyHolder: boolean;
  public showLifeInsured: boolean;
  public showNominee: boolean;
  constructor() { }
  private baseMethod = new BehaviorSubject("");
  sharedData = this.baseMethod.asObservable();
  setParam(param: any) { this.baseMethod.next(param) }
  callComponentMetod(value: string) {
    this.baseMethod.next(value);
  }
  changeTab(tabName: string) {
    this.showLifeInsured = tabName == "lifeInsured" ? true : false;
    this.showPolicyHolder = tabName == "policyHolder" ? true : false;
    this.showNominee = tabName == "nominee" ? true : false;
  }
}