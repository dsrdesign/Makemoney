import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { environment } from "src/environment/environment";
import { Depense } from "./models/depense";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})

export class DepensesService{

  private _apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient,
              private toastr: ToastrService
              ){}

  depenses$!: Observable<Depense[]>;
  // userId:any = localStorage.getItem('@ID')

  getAllDepense(): Observable<any>{
    const userId:any = localStorage.getItem('@ID')
    const typeAction = 'depense'
    return this._http.get<any>(`${this._apiUrl}/depenses/?userId=${userId}&typeAction=${typeAction}`)
    // .pipe(
    //   // tap(
    //   //   (response) => {
    //   //     console.log(response.data )
    //   //     return response.data
    //   //   }
    //   // ),

    // );
  }

    addDepense(depense: Depense)
    {
      const userId:any = localStorage.getItem('@ID')
      return this._http.post<Depense>(`${this._apiUrl}/depenses/create/?userId=${userId}`, depense).pipe(
        tap({
          next: (reponse: any)=> {
            console.log("Reponse: ", reponse)
          },
          error: (error: HttpErrorResponse) => {
            this.toastr.error(`Veuillez remplir les champs obligatoire`, 'Echec !');
            console.log("Erreur: ", error)
          }
        })
      )


    }

    deleteDepense(depenseId: number){
       return this._http.delete(`${this._apiUrl}/deleteAction/${depenseId}`);
    }

    getDepenseDuMois(): Observable<any>{
      const userId:any = localStorage.getItem('@ID')
      const typeAction = 'depense'
      return this._http.get<any>(`${this._apiUrl}/actionsMois?userId=${userId}&typeAction=${typeAction}`)
    }

    getCategories(): Observable<any>{
      return this._http.get<any>(`${this._apiUrl}/categorie/?typeAction=depense`)
    }


}
