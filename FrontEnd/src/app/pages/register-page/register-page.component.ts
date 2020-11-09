import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'RegisterPage',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  // Injected dependencies work only within ngOnInit, 
  // thus the reason why event handlers are explicitly defined in this scope.
  ngOnInit(): void {

    // Event handler for registration button.
    document.getElementById("register-btn").addEventListener("click", () => {
      let user = this.getCredentials(),
          code = null;

      this.userService.register(user)
        .subscribe(
          // Get exit_code from response
          response => {
            code = response.exit_code;
          },
          
          // Error handler
          error => alert(error),
          
          // On observable completion.
          () => this.check(code)
        )
    } );
    // End of ngOnInit hook.
  }

  getCredentials() {

    // // Verify Passwords.
    // let password = document.getElementById('password'),
    //     password_confirm = document.getElementById('password-confirm');

    // // Password mismatch. 
    // if (password['value'] !== password_confirm['value']){

    //   // Display error message.
    //   alert('Error: Passwords must match.');
      
    //   // Highlight in red both password fields.
    //   password.style.borderColor = 'red';
    //   password_confirm.style.borderColor = 'red';

    //   // Exit method.
    //   return;
    // }

    // Gather input from Form.
    let user = {
      full_name: document.getElementById('fullname')['value'],
      password: document.getElementById('password')['value'],
      email: document.getElementById('email')['value'],
      phone: document.getElementById('phone-number')['value'],
      username: document.getElementById('username')['value']
    };

    // // Need to check if fields match and have red borders. If they do, execute else block.
    // if(borders are red) {
    //   // Remove red border.
    //   password.style.removeProperty('border-color');
    //   password_confirm.style.removeProperty('border-color');
    // }

    return user;
    // End of getCredentials function.
  }

  check(code: number) {

    //  Interpret response.
    switch(code) {
      case 0:
          // Registration Successfull. 
          alert('Thank you for registering!');
          this.router.navigate(["/home"])
          break;
      case -1:
          // Email already exists. 
          alert('Email already registered.')
          break;
      case -2:
          // Username unavailable.
          alert('Username already exists in database.')
          break;
      case -3:
          // Phone number already exists.
          alert('Phone number already registered.')
          break;
      case -4:
          //Some error happened. 
          alert('Something bad happened. Please try again later.')
          break;

      // End of switch statement.
    }
    // End of check function.
  }

  // End of component class.
}
