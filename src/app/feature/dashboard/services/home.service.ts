import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment";

@Injectable({
  providedIn: 'root'
})

export class HomeService{

  private _apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient){}





  getActionDuMois(typeAction: string): Observable<any>{
    const userId:any = localStorage.getItem('@ID')
    return this._http.get<any>(`${this._apiUrl}/actionsMois?userId=${userId}&typeAction=${typeAction}`)
  }

  getMontantMois(): Observable<any>{
    const userId:any = localStorage.getItem('@ID')
    const typeAction = 'depense'
    return this._http.get<any>(`${this._apiUrl}/depenses/?userId=${userId}&typeAction=${typeAction}`)
  }

}
