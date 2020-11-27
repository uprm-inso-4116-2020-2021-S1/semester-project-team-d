import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'LandingPage',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  // should be paired with their list of books
  carousels = {
    "Best Of The Month": [],
    "Best Sellers": [],
  }

  constructor(private bookService: BookService, private router: Router) { 
  }

  ngOnInit(): void {

    // this.bookService.getLandingBooks()
    //   .subscribe(

    //     response => {
    //       this.carousels["Best Sellers"] = response["best_sellers"];
    //       this.carousels["Best Of The Month"] = response["best_of_month"];
    //     },

    //     error => {
    //       alert(error);
    //     }
    //   )
    

    this.carousels["Best Of The Month"] = [
      {
        title: "test title",
        author: "test author",
        bookID: 359
      },
      {
        title: "test title",
        author: "test author",
        bookID: 258
      },      
      {
        title: "test title",
        author: "test author",
        bookID: 157
      },      
      {
        title: "test title",
        author: "test author",
        bookID: 187
      },      
      {
        title: "test title",
        author: "test author",
        bookID: 303
      }
    ]
      
  }
}