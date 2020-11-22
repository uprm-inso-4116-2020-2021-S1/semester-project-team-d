import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { UserSessionService } from 'src/app/services/user-session/user-session.service';

@Component({
  selector: 'BookForm',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor(private bookService: BookService, private userSession: UserSessionService) { }

  ngOnInit(): void {
    document.getElementById("recreational").addEventListener("click", this.displayRecreationalOptions);
    document.getElementById("academic").addEventListener("click", this.displayAcademicOptions);

    document.getElementById("publish-btn").addEventListener("click", () => {
      if(!this.userSession.isAuthenticated())
        alert("Must be signed in first.");

      else{
        // this.userSession.openSession("589")
        let book = this.gatherInput();
        book["uuid"] = this.userSession.getUUID();
        this.bookService.postBook(book).subscribe();
      }
    })
  }

  displayRecreationalOptions() {
    let recreational = document.getElementById("rec-options"),
        academic = document.getElementById("acad-options");

    academic.style.display = "none";
    recreational.style.display = "flex";
  }

  displayAcademicOptions() {
    let academic = document.getElementById("acad-options"),
        recreational = document.getElementById("rec-options");

    recreational.style.display = "none";
    academic.style.display = "flex";
  }

  gatherInput() {
    // Gather title & author
    let book = {
      title: document.getElementById("title")['value'],
      author: document.getElementById("author")['value']
    }

    // If academic is active, gather its fields
    if (document.getElementById("academic")['checked']){
      book["type"] = "academic";
      book["faculty"] = document.getElementById("faculty")['value'];
      book["department"] = document.getElementById("department")['value'];
      book["courseID"] = document.getElementById("courseID")['value'];
      book["edition"] = document.getElementById("edition")['value'];
    }

    // Other, gather academic fields
    else if(document.getElementById("recreational")['checked']){
      book["type"] = "recreational";
      book["genre"] = document.getElementById("genre")['value'];
      book["volume"] = document.getElementById("volume")['value'];
    }

    else {
      alert("Please select an option.")
    }

    return book;
  }
}
