import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
