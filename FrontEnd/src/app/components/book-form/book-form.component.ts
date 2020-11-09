import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'BookForm',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("recreational").addEventListener("click", this.displayRecreationalOptions);
    document.getElementById("academic").addEventListener("click", this.displayAcademicOptions);
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
}
