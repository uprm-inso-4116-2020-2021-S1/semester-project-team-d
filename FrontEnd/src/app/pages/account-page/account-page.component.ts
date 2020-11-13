import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'AccountPage',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  // items = {}

  items = {
    listings: [],
    orders: [],
    holdings: []
  }

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    // this.bookService.getAccountBooks(uuid)
    //   .subscribe(
    //     response => {
    //       this.items = response;
    //     },
    //     error => alert(error)
    //   )
  }

  displayBookForm(): void {
    let button = document.getElementById("post-btn"),
        form = document.getElementById("book-form");

    button.style.display = "none";
    form.style.display = "flex";
  }
}
