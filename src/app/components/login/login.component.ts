import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PangolinService } from '../../services/pangolin.service'
import {ErrorStateMatcher} from '@angular/material/core';
import { CookieService } from 'ngx-cookie-service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;

  emailFormControl = new FormControl('',
   [
    Validators.required
  ]);

  passwordFormControl = new FormControl('',
   [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private cookieService: CookieService, private router: Router, private Api: PangolinService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.passwordFormControl.invalid || this.emailFormControl.invalid) {
        return;
    }

    this.Api.login(this.emailFormControl.value, this.passwordFormControl.value)
        .subscribe(
            data => {
               data = Object.values(data);
                if (data == null) {
                  alert("Email ou Mot de passe incorrect");
                  return;
                }
                this.cookieService.set('id', data[0]);
                this.cookieService.set('email', data[1]);

                this.router.navigate(["friends"]);
            },
            error => {
                alert("Email ou Mot de passe incorrect");
            });
    }
}
