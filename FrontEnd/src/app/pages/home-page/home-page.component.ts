import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { UserSessionService } from 'src/app/services/user-session/user-session.service';

@Component({
  selector: 'HomePage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  carousels = [
    {
      type: "By Genre",
      books: [],
      link: "genre"
    },
    {
      type: "By Faculty",
      books: [],
      link: "faculty"
    },

    {
      type: "By Department",
      books: [],
      link: "department"
    }
  ]

  constructor(private bookService: BookService, private userSession: UserSessionService) { }

  ngOnInit(): void {

    this.bookService.getHomeBooks()
      .subscribe(

        response => {

          for(var index in this.carousels)
            this.carousels[index].books = response[index];
    
        },

        error => alert(error)
      );

  }

}
