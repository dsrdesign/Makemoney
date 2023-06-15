import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { RevenusService } from '../../revenu.service';
import { Revenu } from '../../models/revenu';
import { Depense } from 'src/app/feature/depense/models/depense';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-revenu',
  templateUrl: './new-revenu.component.html',
  styleUrls: ['./new-revenu.component.css']
})
export class NewRevenuComponent implements OnInit{

  public categories:any = []


  public revenu: Revenu = new Revenu

  revenuForm!: FormGroup;
  newRevenus$!: Observable<Revenu>;

  constructor(  private depenseSeverive: RevenusService,
                private _router: Router,
                private toastr: ToastrService){

  }

  ngOnInit(): void {
    this.depenseSeverive.getCategories().subscribe(res => {
      this.categories = res.data
    })

  }

  public listRevenu(): void{
    this._router.navigateByUrl('revenu')
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
      this.toastr.success(`Un revenu a bien été enregistré`, 'Sucess');
      this._router.navigate(['revenu'])

    })

  }

    afficheDate(){
      Date();
    }
    datess = new Date()
}
