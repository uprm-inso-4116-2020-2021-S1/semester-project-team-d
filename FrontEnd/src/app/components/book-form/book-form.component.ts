import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'BookForm',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    document.getElementById("recreational").addEventListener("click", this.displayRecreationalOptions);
    document.getElementById("academic").addEventListener("click", this.displayAcademicOptions);

    document.getElementById("publish.btn").addEventListener("click", () => {
      let book = this.gatherInput();
      this.bookService.postBook(book);
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

  gatherInput(): any {
    // Also add uuid field
  }
}
