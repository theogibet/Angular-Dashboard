import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm,  Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { PangolinService } from '../../services/pangolin.service'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



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
    age: "",
    family: "",
    race: "",
    food: ""
  };

  matcher = new MyErrorStateMatcher();

  constructor(private cookieService: CookieService, private Api: PangolinService, private router: Router) {
    this.Api.getUser(this.cookieService.get('id'))
        .subscribe(
            data => {
               this.user.email = data['email'];
               this.user.password = data['password'];
               this.user.name = data['name'];
               this.user.age = data['age'];
               this.user.family = data['family'];
               this.user.race = data['race'];
               this.user.food = data['food'];
            },
            error => {
            })
    }

  saveUser(){
    this.Api.updateUser(this.cookieService.get('id'), this.user)
        .subscribe(
            data => {
              this.router.navigate(["friends"]);
            },
            error => {
                alert("Email ou Mot de passe incorrect");
            })
  }

  ngOnInit(): void {

  }

}
