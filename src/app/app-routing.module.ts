import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/components/login/login.component'
import {RegisterComponent} from '../app/components/register/register.component'
import {FriendsComponent} from '../app/components/friends/friends.component'
import {ProfileComponent} from '../app/components/profile/profile.component'


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'profile', component: ProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
