import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let button = document.getElementById('login-btn');
    button.addEventListener("click", this.validateCredentials);
  }

  validateCredentials() {
    let username = document.getElementById('username')['value'],
        password = document.getElementById('password')['value'];

    alert(`username is: ${username} & password is: ${password}.`);
  }
} 