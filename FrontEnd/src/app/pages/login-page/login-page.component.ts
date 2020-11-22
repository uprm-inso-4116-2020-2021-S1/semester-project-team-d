import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSessionService } from 'src/app/services/user-session/user-session.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'LoginPage',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  constructor(
    private userService: UserService, 
    private userSession: UserSessionService,
    private router: Router) { }

  ngOnInit(): void {

    // Event handler for login button.
    document.getElementById('login-btn').addEventListener('click', () => {
      let user = this.getCredentials(),
          code = null;

      this.userService.validate(user)
        .subscribe(
          // Get exit_code from response.
          response => {
            code = response.uid;
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

  check(code) {
    switch(code) {
      case -1:
          alert('Username does not exist in database.')
          break;

      case -2:
          alert('Incorrect Password.')
          break;

      default:
        alert('Thank you for logging in!')
        // Open session.
        this.userSession.openSession(code);
        // Take user to home screen.
        this.router.navigate(["/home"]);
        break;
    }
  }
} 