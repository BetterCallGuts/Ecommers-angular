import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Main } from '../main';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  the_api:string = Main.API_URL;

  constructor(private _http:HttpClient) { }


  getalldata():Observable<any>{ 
    return this._http.get(this.the_api + "getalldata")
  }

  loginrequest(data:any):Observable<any>{
    return this._http.post(this.the_api + "checkuser" , data)
  }


  signuprequest(data:any):Observable<any>{

    return this._http.post(this.the_api + "createuser",data)
  }



}
