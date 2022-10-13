import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";
  public loggedin: boolean = false;
  public error: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  loginClick() {
    this.error = "";
    if (this.username == "admin" && this.password == "123") {
      this.loggedin = true;
    } else {
      this.loggedin = false;
      this.error = "Nem megfelelő felhasználónév vagy jelszó.";
    }
  }

  logoutClick() {
    this.error = "";
    this.loggedin = false;
    this.password = "";
  }

}
