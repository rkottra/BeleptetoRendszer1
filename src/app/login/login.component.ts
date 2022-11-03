import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";
  public loggedin: boolean = false;
  
  constructor(private error:ErrorService) { }

  ngOnInit(): void {
  }

  loginClick() {
    this.error.deleteError();
    if (this.username == "admin" && this.password == "123") {
      this.loggedin = true;
    } else {
      this.loggedin = false;
      this.error.setError("Nem megfelelő felhasználónév vagy jelszó.");
    }
  }

  logoutClick() {
    this.error.deleteError();
    this.loggedin = false;
    this.password = "";
  }

}
