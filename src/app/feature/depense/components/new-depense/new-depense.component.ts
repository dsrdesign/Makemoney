import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { DepensesService } from '../../depense.service';
import { Depense } from '../../models/depense';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-depense',
  templateUrl: './new-depense.component.html',
  styleUrls: ['./new-depense.component.css']
})
export class NewDepenseComponent implements OnInit {



  public depense: Depense = new Depense;

  public categories:any = []

  depenseForm!: FormGroup;
  newDepense$!: Observable<Depense>;

  constructor(  private depenseSeverive: DepensesService,
                private _router: Router,
                private toastr: ToastrService){}

  ngOnInit(): void {
    this.depenseSeverive.getCategories().subscribe(res => {
      this.categories = res.data
    })

  }

  public listDepense(): void{
    this._router.navigateByUrl('/depense')
  }

  public enrDepense(formValue: {categorie: string, nom: string, montant: number, date: Date, description: string}){

    const userId:any = localStorage.getItem('@ID')
    const depense = new Depense


    depense.categorie = formValue.categorie
    depense.nom = formValue.nom
    depense.montant = formValue.montant
    depense.date = formValue.date
    depense.description = formValue.description
    depense.userId = userId

    this.depenseSeverive.addDepense(depense).subscribe(res => {
      console.log(res)
      this.toastr.success(`Une dépense a bien été enregistré`, 'Sucess');
      this._router.navigate(['depense'])

    })

  }

}
