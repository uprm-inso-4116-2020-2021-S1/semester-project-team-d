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

    const req = new XMLHttpRequest();
    req.open('GET', 'localhost:3000');
    req.responseType = 'json';
    req.send(JSON.stringify(username));

    req.onload = () => {
      alert(req.response);
    }
  }
} 