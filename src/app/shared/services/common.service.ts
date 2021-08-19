import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'; 

@Injectable()
export class CommonService {
    constructor() { } 
    private baseMethod = new BehaviorSubject("");
    sharedData = this.baseMethod.asObservable();
    setParam(param:any) { this.baseMethod.next(param)}    
    callComponentMetod(){ 
        this.baseMethod.next("");      
      }
}