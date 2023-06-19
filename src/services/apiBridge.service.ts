import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Root } from "src/model/product.model";

@Injectable({ providedIn: 'root' })
export class apiBridgeService{
    constructor(
        private http: HttpClient
    ){}

    getProductData(skipVal:number,limitVal:number): Observable<Root>{
        let values='limit='+limitVal+'&skip='+skipVal;
        return this.http.get<Root>('https://dummyjson.com/products?'+values);
    }

}