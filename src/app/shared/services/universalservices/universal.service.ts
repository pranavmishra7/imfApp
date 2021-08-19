import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UniversalService {
  apiToken: string = "XMX5K-wWx3GqbNDsj6njntwRDd2gVe-1wpHDJCYyYn76stnykxMFnl6rWOP9P0rEqM"
  auth_token: string
  public tokenReqHeader: any
  public reqHeader: any
  constructor(
    private http: HttpClient,

  ) {
    this.tokenReqHeader = new HttpHeaders({
      "Accept": "application/json",
      "api-token": this.apiToken,
      "user-email": "cruse07@gmail.com"

    });
  }
  public getAuthToken() {
    let url = "https://www.universal-tutorial.com/api/getaccesstoken";
    return this.http.get(url, { headers: this.tokenReqHeader });
  }
  public getbearerToken(): Promise<any> {
    // let promise = new Promise((resolve, reject) => {
    //   let apiURL = "https://www.universal-tutorial.com/api/getaccesstoken";
    //   this.http.get(apiURL, {headers: this.tokenReqHeader})
    //     .toPromise()
    //     .then(
    //       res => { // Success
    //         console.log(res);
    //         resolve(res);
    //         this.auth_token= res["auth_token"]
    //       }
    //     );
    // });
    // return promise;
    return this.getAuthToken().toPromise()
  }
  getCountries() {
    //let value = await this.getAuthToken().toPromise()
    //console.log(value)
    this.reqHeader = new HttpHeaders({
      "Accept": "application/json"
    });
    let url = "https://countriesnow.space/api/v0.1/countries/states";
    return this.http.get(url, { headers: this.reqHeader });
  }
  getStates(country: string) {
    let url = "https://countriesnow.space/api/v0.1/countries/states"
    let data = { "country": country }
    return this.http.post(url, data, { headers: this.reqHeader });
  }
  getCities(country: string, state: string) {
    let url = "https://countriesnow.space/api/v0.1/countries/state/cities"
    let data = { "country": country, "state": state }
    return this.http.post(url, data, { headers: this.reqHeader });
  }
  getIsdCodes() {
    this.reqHeader = new HttpHeaders({
      "Accept": "application/json"
    });
    let url = "https://countriesnow.space/api/v0.1/countries/codes"
    return this.http.get(url, { headers: this.reqHeader });
  }
}
