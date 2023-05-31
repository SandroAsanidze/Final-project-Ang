import { Injectable } from "@angular/core";

Injectable({
    providedIn:'root'
})
export class StorageService {
    private _localStorage = localStorage
    constructor(){}

    get(key:string): any | undefined {
        return this._localStorage.getItem(key) || undefined
    }

    set(key:string,value: any){
        this._localStorage.setItem(key,JSON.stringify(value))
    }

    clearStorage(){
        this._localStorage.clear()
    }

    keyExists(key: string): boolean{
        return !!this.get(key)
    }
}