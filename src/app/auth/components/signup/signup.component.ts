import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/auth.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  public user: User = new User
  constructor(
              private _authService: AuthService,
              private _router: Router,
              private toastr: ToastrService){}

  ngOnInit(): void {}

  onSign(formValue: {email: string, password: string, name: string, surname: string}){
    const user = new User
    user.email = formValue.email
    user.password = formValue.password
    user.name = formValue.name
    user.surname = formValue.surname
    this._authService.signUp(user).subscribe(res => {
      console.log(res)
      this.toastr.success(`Veuillez vous connecter !`, 'Compte crée avec Sucess');
      this._router.navigate(['auth'])
    })
  }



}
