import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm,  Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { PangolinService } from '../../services/pangolin.service'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailFormControl = new FormControl('',
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

  familyFormControl = new FormControl('',[]);
  raceFormControl = new FormControl('',[]);
  foodFormControl = new FormControl('',[]);
  matcher = new MyErrorStateMatcher();


  selected: any;
  constructor(private Api: PangolinService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
     let user = {
      email: "",
      password: "",
      name: "",
      age: 0,
      family: "",
      race: "",
      food: ""
    }

    user.email = this.emailFormControl.value
    user.password = this.passwordFormControl.value
    user.name = this.nameFormControl.value
    user.age = this.ageFormControl.value
    user.family = this.familyFormControl.value
    user.race = this.raceFormControl.value
    user.food = this.foodFormControl.value
    console.log(user)
    this.Api.register(user)
    .subscribe(
        data => {
            alert("Pangolin créé, veuillez vous connecter")
            this.router.navigate(["login"]);
        },
        error => {
          console.log(error);
            alert("Erreur lors de la création du pangolin");
        });
  }
}
