import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  pseudo: string;
  username: string;

  friends = [
    {name: "Julie"},
    {name: "Mathilde"},
    {name: "Manon"},

  ]

  groups = [
    {name: "Les gamers"},
    {name: "Colloc"},
  ]

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {

    let addFriendModal = document.getElementById("addFriendModal");
    let addGroupModal = document.getElementById("addGroupModal");
    let addFriendBtn = document.getElementById("addFriend");
    let addGroupBtn = document.getElementById("addGroup");
    let span = document.getElementById("closeFriendModal");
    let grpSpan = document.getElementById("closeGroupModal");

    addFriendBtn.onclick = function() {
      addFriendModal.style.display = "block";
    }

    addGroupBtn.onclick = function() {
      addGroupModal.style.display = "block";
    }

    span.onclick = function() {
      addFriendModal.style.display = "none";
    }

    grpSpan.onclick = function() {
      addGroupModal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == addFriendModal) {
        addFriendModal.style.display = "none";
      }
      if (event.target == addGroupModal) {
        addGroupModal.style.display = "none";
      }
    }
  }

  addFriend(): void {
    const dialogRef = this.dialog.open(AddFriend, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.pseudo = result;
    });
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

@Component({
  selector: 'add-friend',
  templateUrl: 'add-friend.html',
})
export class AddFriend {
  data: {
    username: string,
    pseudo: string,
  };
  constructor(
    public dialogRef: MatDialogRef<AddFriend>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }



}
