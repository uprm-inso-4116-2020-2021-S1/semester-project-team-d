import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'LoginPage',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    // Event handler for login button.
    document.getElementById('login-btn').addEventListener('click', () => {
      let user = this.getCredentials(),
          code = null;

      this.userService.validate(user)
        .subscribe(
          // Get exit_code from response.
          response => {
            code = response.exit_code;
          },

          // Handle error
          error => alert(error),
        
          // On observable completion
          () => this.check(code)
        )
    } );
  }

  getCredentials() {

    // Gather input from form.
    let user = {
      credential: document.getElementById('credential')['value'],
      password: document.getElementById('password')['value']
    }

    return user;
  }

  check(code: number) {
    switch(code) {
      case 0:
          alert('Thank you for logging in!')
          // Take user to home screen.
          this.router.navigate(["/home"]);
          break;

      case -1:
          alert('Username does not exist in database.')
          break;

      case -2:
          alert('Incorrect Password.')
          break;
    }
  }
} 