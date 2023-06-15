import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, shareReplay, tap } from "rxjs";
import { User } from "src/app/auth/models/user.model";
import { environment } from "src/environment/environment";

@Injectable({
  providedIn: 'root'
})

export class ProfileService{
  private _apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient){}



  getUser(): Observable<any>{
    const userId:any = localStorage.getItem('@ID')
    return this._http.get<any>(`${this._apiUrl}/user/${userId}`)
  }

  updateUser(user: User): Observable<User>{
    const userId:any =  localStorage.getItem('@ID')
    return this._http.put<User>(`${this._apiUrl}/user/update/${userId}`, user).pipe(
      shareReplay(1),
      tap({
        next: (reponse: any) => {
          console.log("Reponse: ", reponse);
        },
        error: (error: HttpErrorResponse) => {
          console.log("error:", error)
        }
      })
    )
  }
}
