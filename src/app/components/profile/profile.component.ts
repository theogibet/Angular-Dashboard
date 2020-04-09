import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm,  Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { PangolinService } from '../../services/pangolin.service'
import { CookieService } from 'ngx-cookie-service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string;
  user = {
    email: "",
    password: "",
    name: "",
    age: 0,
    family: "",
    race: "",
    food: "",
  };

  emailFormControl = new FormControl(this.user.email,
   [
    Validators.required
  ]);

  passwordFormControl = new FormControl('',
   [
    Validators.required
  ]);

  nameFormControl = new FormControl('',
   [
    Validators.required
  ]);

  ageFormControl = new FormControl('',
   [
    Validators.required,
    Validators.pattern("^[1-9][0-9]?$|^100$"),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private cookieService: CookieService, private Api: PangolinService) {
    this.Api.getUser(this.cookieService.get('id'))
        .subscribe(
            data => {
               data = Object.values(data);
               this.user.email = data[1];
            },
            error => {
                alert("Email ou Mot de passe incorrect");
            })
    }

  ngOnInit(): void {

  }

}
