import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Depense } from '../new-depense/depense';
import { DepensesService } from './depense.service';

@Component({
  selector: 'app-list-depense',
  templateUrl: './list-depense.component.html',
  styleUrls: ['./list-depense.component.css']
})
export class ListDepenseComponent implements OnInit{

  depenses$!: Observable<Depense[]>;


  constructor(  private depensesService: DepensesService,
                private router: Router){}

  ngOnInit(): void {
      this.depenses$ = this.depensesService.getAllDepense();
  }

  ajoutDepense(): void{
    this.router.navigateByUrl('depense');
  };

  deleteDepense(depense: Depense){
    this.depensesService.deleteDepense(depense.id)
    .subscribe(() => {
      this.depenses$ = this.depensesService.getAllDepense()
    })
  }




}
