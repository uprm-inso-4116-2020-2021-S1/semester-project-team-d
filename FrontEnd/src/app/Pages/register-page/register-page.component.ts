import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("register-btn").addEventListener("click", this.sendCredentials);
  }

  async sendCredentials() {
    let post = {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        full_name: 'Spencer Nichols',
        username: 'spency7',
        email: 'jsap',
        password: 'jjsappy',
        phone: '91234'
      })
    }

    // alert(JSON.stringify(post));

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/register');
    xhr.responseType = "text";
    xhr.send(post.body);
    
    xhr.onload = () => {
      alert(xhr.response());
    };
    
  // await fetch('http://localhost:3000/register', post)
  //   .then(response => { 
  //     alert(JSON.stringify(response)); 
  //     return response.json()
  //   })
  //   .then(data => alert(data))
  //   .catch(err => alert(err))
  //   // .then(json => alert(json));
  }
}
