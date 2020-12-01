import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSessionService } from 'src/app/services/user-session/user-session.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'AccountPage',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  items = {}

  constructor(
    private userService: UserService, 
    private userSession: UserSessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getAccountBooks(this.userSession.getUUID())
      .subscribe(
        response => {
          this.items = response;
        },
        error => alert(error)
      )
  }

  displayBookForm(): void {
    let button = document.getElementById("post-btn"),
        form = document.getElementById("book-form");

    button.style.display = "none";
    form.style.display = "flex";
  }

  signOut() {
    this.userSession.closeSession()
    alert("Successfully logged out!")
    this.router.navigate(["/home"])
  }
}