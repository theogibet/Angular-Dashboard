import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm,  Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

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

  usernameFormControl = new FormControl('',
   [
    Validators.required
  ]);

  passwordFormControl = new FormControl('',
   [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
        this.router.navigate(["friends"]);

        // this.submitted = true;
        // // reset alerts on submit
        // this.alertService.clear();
        //
        // // stop here if form is invalid
        // if (this.loginForm.invalid) {
        //     return;
        // }
        //
        // this.loading = true;
        // this.authenticationService.login(this.usernameFormControl.value, this.passwordFormControl.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
}
