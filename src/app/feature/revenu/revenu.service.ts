import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap, tap } from "rxjs";
import { environment } from "src/environment/environment";
import { Revenu } from "./models/revenu";
import { Depense } from "../depense/models/depense";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})

export class RevenusService{

  private _apiUrl = environment.apiUrl

  constructor(  private _http: HttpClient,
                private toastr: ToastrService){}

  revenus$!: Observable<Revenu>

  getAllRevenu(): Observable<any>{
    const userId:any = localStorage.getItem('@ID')
    const typeAction:any = "revenu"
    return this._http.get<any>(`${this._apiUrl}/depenses/?userId=${userId}&typeAction=${typeAction}`).pipe(
      map(
        (response) => {
          console.log(response.data )
          return response.data
        }
      ),

    );
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
  deleteRevenu(revenuId: number){
    return this._http.delete(`${this._apiUrl}/deleteAction/${revenuId}`);
  }

  getDepenseDuMois(): Observable<any>{
    const userId:any = localStorage.getItem('@ID')
    const typeAction = 'revenu'
    return this._http.get<any>(`${this._apiUrl}/actionsMois?userId=${userId}&typeAction=${typeAction}`)
  }

  getCategories(): Observable<any>{
    return this._http.get<any>(`${this._apiUrl}/categorie/?typeAction=revenu`)
  }


}
