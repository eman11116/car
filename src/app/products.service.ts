import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService  {

  constructor (private _HttpClient:HttpClient) { }
  getCar(): Observable<any>{
   return this._HttpClient.get ("https://myfakeapi.com/api/cars/")
  }

  getProductDetails(id:string): Observable<any>{
    return this._HttpClient.get (`https://www.freetestapi.com/api/v1/cars/${id}`)
    
   }

}
