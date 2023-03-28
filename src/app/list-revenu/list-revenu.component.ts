import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { Revenu } from '../new-revenu/revenu';
import { RevenusService } from './revenu.service';

@Component({
  selector: 'app-list-revenu',
  templateUrl: './list-revenu.component.html',
  styleUrls: ['./list-revenu.component.css']
})
export class ListRevenuComponent implements OnInit {

  revenus$!: Observable<Revenu[]>;
  number!: any;
  cpt = 0;

  constructor(  private revenuService: RevenusService,
                private router: Router){}

  ngOnInit(): void {
    this.revenus$ = this.revenuService.getAllRevenu()
    this.afficheNbre()

  }

  ajoutRevenu(): void{
    this.router.navigateByUrl('revenu')
  }


  afficheNbre(): void{
    const number$ = interval(1)
    this.number = document.getElementById("number")
      number$.subscribe(value => {
        if (value < 5000){
          this.number.innerHTML = ++this.cpt;
        }
      })
  }

  deleteRevenu(revenu: Revenu){
    this.revenuService.deleteRevenu(revenu.id)
    .subscribe(() => {
      this.revenus$ = this.revenuService.getAllRevenu()
    })
  }



}
