import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseurl } from "./constans";
import { Observable } from "rxjs";
import { Products } from "../products/products.interface";

@Injectable({
    providedIn:'root'
})
export class APIService {
    constructor(private _http: HttpClient){
    }
    getProducts(): Observable<Products[]>{
        return this._http.get<Products[]>(`${baseurl}/products`)
    }
    addProduct(data:Products): Observable<Products> {
        return this._http.post<Products>(`${baseurl}/products`,data)
    }
    deleteProduct(id:number){
        return this._http.delete(`${baseurl}/products/${id}`)
    }
    getSingleProduct(id:number): Observable<Products>{
        return this._http.get<Products>(`${baseurl}/products/${id}`)
    }
}