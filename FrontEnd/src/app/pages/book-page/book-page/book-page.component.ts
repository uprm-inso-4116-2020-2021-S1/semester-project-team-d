import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { UserSessionService } from 'src/app/services/user-session/user-session.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'BookPage',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  bookID: string;
  book: {}

  constructor(
    private route: ActivatedRoute, 
    private userService: UserService, 
    private bookService: BookService,
    private userSession: UserSessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.bookID = params['id'])
    this.bookService.getBook(this.bookID)
      .subscribe(
        response => {
          this.book = response;
        },
        error => console.log(error)
      )
  }

  submitRequest() {
    let request = {
      bookID: this.bookID,
      uuid: this.userSession.getUUID()
    }

    this.userService.requestBook(request)
      .subscribe(response => {
        alert(response);
      },
      error => console.log(error)
    )

    alert("Thank you for placing the order. The seller will be notified shortly.")
    this.router.navigate(["/home"])
  }

}
