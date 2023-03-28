import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { DepensesService } from '../list-depense/depense.service';
import { Depense } from './depense';

@Component({
  selector: 'app-new-depense',
  templateUrl: './new-depense.component.html',
  styleUrls: ['./new-depense.component.css']
})
export class NewDepenseComponent implements OnInit {



  public depense: Depense = new Depense;

  depenseForm!: FormGroup;
  newDepense$!: Observable<Depense>;

  constructor(  private depenseSeverive: DepensesService,
                private router: Router){}

  ngOnInit(): void {

  }

  public listDepense(): void{
    this.router.navigateByUrl('listDepense')
  }

  public enrDepense(registerForm: NgForm){
    this.depenseSeverive.addDepense(registerForm.value).pipe(
      tap(() => this.router.navigateByUrl('/listDepense'))
    ).subscribe();
  }

}
