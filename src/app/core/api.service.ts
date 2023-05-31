import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AUTH_KEY, baseurl } from "./constans";
import { Observable, tap } from "rxjs";
import { Products } from "../products/products.interface";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn:'root'
})
export class APIService extends StorageService{
    constructor(private _http: HttpClient){
        super();
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
    signIn(data: {username:string, password:string}): Observable<{token: string}>{
        return this._http.post<{token: string}>("https://fakestoreapi.com/auth/login",data).pipe(
            tap(data => {
                this.set(AUTH_KEY,data.token)
            })
        )
    }

    isAuthorized(): boolean{
        return this.keyExists(AUTH_KEY)
    }
}