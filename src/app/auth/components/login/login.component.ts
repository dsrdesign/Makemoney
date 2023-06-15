import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/auth.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public user: User = new User;


  constructor(private _authService: AuthService,
              private _router: Router,
              private toastr: ToastrService){}

  ngOnInit(): void {}


  onLogin(formValue: {email: string, password: string}) {
    this._authService.login(formValue.email, formValue.password).subscribe(res => {
      const nom = res.data.name
      console.log('ma response nor: ',res)
      this.toastr.success(`Bienvenue ${nom} !`, 'Connexion Reussie');
      this._router.navigate(['dashboard']);
    });
  }




}
