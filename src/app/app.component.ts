import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu: any;
  conteneur: any;
  constructor(){
  }

  displayMenu(){
    this.menu = document.getElementById('menu');
    this.conteneur = document.getElementById('conteneur');
    if (this.menu.style.display != "none"){
      console.log(this.menu)
      this.menu.style.display = "none";
      this.conteneur.style.margin = "0px";

    }else{
        this.menu.style.display = "flex";
        this.conteneur.style.margin = "0px 0px 0px 250px ";
      }
  }

  displayMenu2(){
    this.menu = document.getElementById('dropdown');
    if (this.menu.style.display === "none"){
      console.log(this.menu)
      this.menu.style.display = "flex";

    }else{
        this.menu.style.display = "none";
      }
  }

}
