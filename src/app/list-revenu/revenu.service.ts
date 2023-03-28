import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { Revenu } from "../new-revenu/revenu";

@Injectable({
  providedIn: 'root'
})

export class RevenusService{

  constructor( private http: HttpClient){}

  revenus$!: Observable<Revenu>

  getAllRevenu(): Observable<Revenu[]>{
    return this.http.get<Revenu[]>('http://localhost:3000/revenus');
  }

  addRevenu(formValue: {categorie: string, nom: string, montant: number, date: Date, description: string}): Observable<Revenu>
  {
    return this.getAllRevenu().pipe(
      map(revenus => [...revenus].sort((a,b) => a.id - b.id)),
      map(sortedRevenus => sortedRevenus[sortedRevenus.length - 1]),
      map(previousRevenu => ({
        ...formValue,
        id: previousRevenu.id + 1
      })),
      switchMap(newRevenu => this.http.post<Revenu>(
          'http://localhost:3000/revenus', newRevenu)
      )
    )
  }

  deleteRevenu(revenuId: number){
    return this.http.delete(`http://localhost:3000/revenus/${revenuId}`);
  }


}
