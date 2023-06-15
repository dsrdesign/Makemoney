import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menu: any;
  conteneur: any;
  constructor(private _router: Router){
  }


  displayMenu(){
    this.menu = document.getElementById('menu');
    this.conteneur = document.getElementById('conteneur');
    if (this.menu.style.display != "none"){
      this.menu.style.display = "none";
      this.conteneur.style.margin = "0px";

    }else{
        this.menu.style.display = "flex";
        this.conteneur.style.margin = "0px 0px 0px 250px ";
      }
  }


  displayProfile(){
    this.menu = document.getElementById('profile');
    if (this.menu.style.display != "none"){
      this.menu.style.display = "none";

    }else{
        this.menu.style.display = "flex";
      }
  }

  logout(): void {
    localStorage.clear();
    this._router.navigate(['/auth']);
  }

}
