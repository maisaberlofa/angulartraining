import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = "";
  password: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnLogin() {
    if ((this.user != "") && (this.password != "")) {
      if ((this.user == "admin") && (this.password == "admin")) {
        this.router.navigate(['/home']);
      }
      else {
        alert("Usuário ou senha incorretos!");
      }
    }
    else{
      alert("Usuário e senha devem ser preenchidos!");
    }
  }
}