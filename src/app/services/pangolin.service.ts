import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PangolinService {

  constructor(private http: HttpClient) {}

  private static updateUrl(req: string) {
    return "http://localhost:3000" + req
  }

  login(email, password) {
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

  getUser(id) {
    let httpOptions = {
        headers: new HttpHeaders({
            'accept' : 'application/json',
            'Content-Type': 'application/json'
        })
      };
    return this.http.get("http://localhost:3000/users/"+id, httpOptions);
  }

  getFriends(email) {
    let httpOptions = {
        headers: new HttpHeaders({
            'accept' : 'application/json',
        })
      };
    return this.http.get("http://localhost:3000/friends/emailUser/"+email, httpOptions);
  }

  deleteFriend(email, friendEmail) {
    let httpOptions = {
        headers: new HttpHeaders({
            'accept' : 'application/json',
        })
      };
    return this.http.delete("http://localhost:3000/friends/emailUser/"+email+"/emailFriend/"+friendEmail, httpOptions);
  }

  addFriend(email, emailFriend) {
    let httpOptions = {
        headers: new HttpHeaders({
            'accept' : 'application/json',
            'Content-Type': 'application/json'
        })
      };
      return this.http.post("http://localhost:3000/friends", {emailFriend: emailFriend, emailUser: email}, httpOptions);
  }
}
