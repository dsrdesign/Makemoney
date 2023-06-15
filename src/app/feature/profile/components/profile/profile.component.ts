import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../profile.services';
import { User } from 'src/app/auth/models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  profileFom!: FormGroup;

  disa: boolean = true
  disaEnregister = true
  public users: User = new User
  public user: User = new User


  constructor(private _router: Router,
              private profileService: ProfileService,
              private toastr: ToastrService){
    // document.querySelector('input')?.style
    // document.getElementsByClassName('input').length
  }

  ngOnInit(): void {
    this.profileService.getUser().subscribe(res => {
      this.users = res.data
    })


  }


  edite(){
    this.disa = false
    this.disaEnregister = false
  }

  reset(){
    this.profileService.getUser().subscribe(res => {
      this.users = res.data
    })
    this.disa = true
    this.disaEnregister = true

  }

  updateProfile(formValue: {email: string, password: string, name: string, surname: string}){
    const use = new User
    use.email = formValue.email
    use.password = formValue.password
    use.name = formValue.name
    use.surname = formValue.surname
    console.log("user:", use)
    this.profileService.updateUser(use).subscribe(res => {
      console.log(res)
      // this._router.navigate(['dashboard'])
      this.profileService.getUser().subscribe(res => {
        localStorage.setItem('@EMAIL', res.data.email)
      })
      // localStorage.setItem('@EMAIL', )
    })
  }

  logout(): void {
    localStorage.clear();
    this._router.navigate(['/auth']);
    this.toastr.info(`Aurevoir !`, 'Vous êtes déconnecté !');
  }


}
