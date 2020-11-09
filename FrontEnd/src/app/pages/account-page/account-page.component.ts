import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AccountPage',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  items = {
    Listings: [],
    Orders: [],
    Holdings: []
  }

  constructor() { }

  ngOnInit(): void {
  }

  displayBookForm(): void {
    let button = document.getElementById("post-btn"),
        form = document.getElementById("book-form");

    button.style.display = "none";
    form.style.display = "flex";
  }
}
