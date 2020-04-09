import { Component, OnInit } from '@angular/core';
import { PangolinService } from '../../services/pangolin.service'
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm,  Validators} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  pseudo: string;
  username: string;

  friends = [];

  submitted = false;

  emailFormControl = new FormControl('',
   [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, public cookieService: CookieService, private Api: PangolinService) { }


  ngOnInit(): void {

    this.Api.getFriends(this.cookieService.get('email'))
        .subscribe(
            data => {
               if (data != null) {
                 let i = 0
                 while(data[i]) {
                   this.friends.push(data);
                   i++;
                 }
               }
            });

    let addFriendModal = document.getElementById("addFriendModal");
    let addFriendBtn = document.getElementById("addFriend");
    let span = document.getElementById("closeFriendModal");

    addFriendBtn.onclick = function() {
      addFriendModal.style.display = "block";
    }
    span.onclick = function() {
      addFriendModal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == addFriendModal) {
        addFriendModal.style.display = "none";
      }
    }


  }

  logout () {
    this.cookieService.delete('id');
    this.cookieService.delete('email');
    this.router.navigate(["login"]);
  }

  deleteFriend(i) {
    this.Api.deleteFriend(this.cookieService.get('email'), this.friends[0][i]["emailFriend"] )
        .subscribe(
            data => {
              console.log(data)
              this.friends.splice(i, 1)
            },
            error => {
              console.log(error)
            })
  }

  addFriend() {
    if (this.emailFormControl.value == ""){
      return
    }
    this.Api.addFriend(this.cookieService.get('email'), this.emailFormControl.value )
        .subscribe(
            data => {
              this.router.navigate(["_friends"]);
            },
            error => {
              console.log(error)
            });

    this.router.navigateByUrl('friends', { skipLocationChange: true }).then(() => {
        this.router.navigate(['friends']);
    });

  }
  closeModal() {
    let addFriendModal = document.getElementById("addFriendModal");
    addFriendModal.style.display = "none";

  }

  openList(evt, name) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
  }
}
