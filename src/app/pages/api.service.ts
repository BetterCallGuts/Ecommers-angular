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
    return this._http.get(this.the_api + "getalldata/")
  }

  loginrequest(data:any):Observable<any>{
    return this._http.post(this.the_api + "checkuser/" , data)
  }


  signuprequest(data:any):Observable<any>{

    return this._http.post(this.the_api + "createuser/",data)
  }

  addToCart(data:any):Observable<any>{
    return this._http.post(this.the_api + "addtocart/", data)
  }



  getCartTotalForUser(userId:any, itemId:any){
    return this._http.post(this.the_api+ "getitemcartforuser/", {"userid": userId, "itemid": itemId})

  }


  getAllCartForUser(userId:any){
    return this._http.post(this.the_api+ "getallcartforuser/", {'userid': userId})
  }


  clearCart(userId:any){

    return this._http.post(this.the_api +  "hepaid/", {'userid' : userId})
  }



  updateCart(data:any){

    return  this._http.post(this.the_api+ "update_cart/", data)
  }

  deleteItemFromCart(data:any){
    return this._http.post(this.the_api + "deleteoneitemfromcart/", data)
  }
}
