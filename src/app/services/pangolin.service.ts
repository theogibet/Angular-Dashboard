import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PangolinService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    let httpOptions = {
        headers: new HttpHeaders({
            'accept' : 'application/json',
            'Content-Type': 'application/json'
        })
      };
    return this.http.get("http://localhost:3000/users/email/"+email+"/password/"+password, httpOptions);
  }

  register(body: any) {
    let httpOptions = {
        headers: new HttpHeaders({
            'accept' : 'application/json',
            'Content-Type': 'application/json'
        })
      };
      return this.http.post("http://localhost:3000/users", body, httpOptions);
  }

  getUser(id: string) {
    let httpOptions = {
        headers: new HttpHeaders({
            'accept' : 'application/json',
            'Content-Type': 'application/json'
        })
      };
    return this.http.get("http://localhost:3000/users/"+id, httpOptions);
  }

  updateUser(id: string, user: any) {
    user._id = id;
    let httpOptions = {
        headers: new HttpHeaders({
            'accept' : 'application/json',
            'Content-Type': 'application/json'
        })
      };
    return this.http.put("http://localhost:3000/users/"+id, user, httpOptions);
  }

  getFriends(email: string) {
    let httpOptions = {
        headers: new HttpHeaders({
            'accept' : 'application/json',
        })
      };
    return this.http.get("http://localhost:3000/friends/emailUser/"+email, httpOptions);
  }

  deleteFriend(email: string, friendEmail: string) {
    let httpOptions = {
        headers: new HttpHeaders({
            'accept' : 'application/json',
        })
      };
    return this.http.delete("http://localhost:3000/friends/emailUser/"+email+"/emailFriend/"+friendEmail, httpOptions);
  }

  addFriend(email: string, emailFriend: string) {
    let httpOptions = {
        headers: new HttpHeaders({
            'accept' : 'application/json',
            'Content-Type': 'application/json'
        })
      };
      return this.http.post("http://localhost:3000/friends", {emailFriend: emailFriend, emailUser: email}, httpOptions);
  }
}
