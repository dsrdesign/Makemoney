import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { RevenusService } from '../list-revenu/revenu.service';
import { Revenu } from './revenu';

@Component({
  selector: 'app-new-revenu',
  templateUrl: './new-revenu.component.html',
  styleUrls: ['./new-revenu.component.css']
})
export class NewRevenuComponent {

  public revenu: Revenu = new Revenu

  revenuForm!: FormGroup;
  newRevenus$!: Observable<Revenu>;

  constructor(  private revenuService: RevenusService,
                private router: Router){

  }

  public listRevenu(): void{
    this.router.navigateByUrl('listRevenu')
  }

  public enrRevenu(registerForm: NgForm){
    this.revenuService.addRevenu(registerForm.value).pipe(
      tap(() => this.router.navigateByUrl('/listRevenu'))
    ).subscribe();
  }

    afficheDate(){
      Date();
    }
    datess = new Date()
}
