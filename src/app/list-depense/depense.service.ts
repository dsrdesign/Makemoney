import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, switchMap, tap } from "rxjs";
import { Depense } from "../new-depense/depense";

@Injectable({
  providedIn: 'root'
})

export class DepensesService{
  constructor(private http: HttpClient){}

  depenses$!: Observable<Depense[]>;

  getAllDepense(): Observable<Depense[]>{
    return this.http.get<Depense[]>('http://localhost:3000/depenses');
  }

  addDepense(formValue: {categorie: string, nom: string, montant: number, date: Date, description: string}): Observable<Depense>
    {
      return this.getAllDepense().pipe(
        map(depenses => [...depenses].sort((a,b) => a.id - b.id)),
        map(sortedDepenses => sortedDepenses[sortedDepenses.length - 1]),
        map( previousDepense => ({
          ...formValue,
          id: previousDepense.id + 1
        })),
        switchMap(newDepense => this.http.post<Depense>(
          'http://localhost:3000/depenses', newDepense)
        )
      )
    }
    deleteDepense(depenseId: number){
      return this.http.delete(`http://localhost:3000/depenses/${depenseId}`);
    }


}
