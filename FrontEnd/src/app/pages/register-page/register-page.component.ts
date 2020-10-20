import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  providers: [ UserService ]
})
export class RegisterPageComponent implements OnInit {
  
  constructor(private userService: UserService) { }

  // Http Client Module works if subscribe within ngOnInit() but not what we need.
  ngOnInit(): void {
    document.getElementById("register-btn").addEventListener("click", this.sendCredentials);
  }

  /*
    This method is used to process user registration.
      -It gathers the input from the Form,
      -Sends http request using the UserService,
      -Finally interprets response.
  */
  sendCredentials() {

    // Gather input from Form.
    let user = {
      full_name: document.getElementById('fullname')['value'],
      password: document.getElementById('password')['value'],
      email: document.getElementById('email')['value'],
      phone: document.getElementById('phone-number')['value'],
      username: document.getElementById('username')['value']
    };
    
    // Verify Passwords.
    let password = document.getElementById('password'),
        password_confirm = document.getElementById('password-confirm');

    // Password mismatch. 
    if (password['value'] !== password_confirm['value']){

      // Display error message.
      alert('Error: Passwords must match.');
      
      // Highlight in red both password fields.
      password.style.borderColor = 'red';
      password_confirm.style.borderColor = 'red';

      // Exit method.
      return;
    }

    // Need to check if fields match and have red borders. If they do, execute else block.
    else {
      // Remove red border.
      password.style.removeProperty('border-color');
      password_confirm.style.removeProperty('border-color');
    }

    // Allocate memory for response code.
    let code = null;

    // Sends http request.
    this.userService.register()
      .subscribe(response => {
        // response should be an object. Property exit_code should store a number.
        code = response.exit_code;

        // Debugging purposes.
        alert(JSON.stringify(response))
      })

    // Handles response.
    switch(code) {
      case 0:
          // Registration Successfull. 
          alert('Thank you for registering!');
          // Take to login page.
          break;
      case -1:
          // Email already exists. 
          alert('Email already registered.')
          break;
      case -2:
          // Username already exists.
          alert('Username is not available.')
          break;
      case -3:
          // Phone number already exists.
          alert('Phone number already registered.')
          break;
      case -4:
          //Some error happened. 
          alert('Something bad happened. Please try again later.')
          break;
    }

    // End of function.
    return;
  }

  // Debugging purposes.
  printMessage() {
    alert("message");
  }
}
