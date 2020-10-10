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

  async validateCredentials() {
    // Read input from fields.
    let credential = document.getElementById('credential')['value'],
        password = document.getElementById('password')['value'];

    // Create user object.
    let user = {
      credential: credential,
      password: password
    }

    // Create HTTP request.
    let post = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }

    await fetch('http://localhost:3000/login/', post)
      .then(response => response.json())
      .catch(err => alert(err))
      // .then(json => alert(json));
  }
} 