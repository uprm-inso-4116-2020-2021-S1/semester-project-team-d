import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private response_code;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let button = document.getElementById('login-btn');
    button.addEventListener("click", this.validateCredentials);    

    this.userService.validate().subscribe()
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

    // Send data with userService
    this.userService.validate()
        .subscribe(code => {
            console.log(code);
            this.response_code = code
        }, error => {
          alert(error);
        })
  }
} 