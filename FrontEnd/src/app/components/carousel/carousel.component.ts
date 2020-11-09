import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  // @Input() books: [];
  @Input() title: string;
  books = [
    {
      cover: "assets/harry_potter_book.jpg",
      title: "Harry Potter",
      author: "J.K. Rowling"
    },
    {
      cover: "assets/harry_potter_book.jpg",
      title: "Harry Potter",
      author: "J.K. Rowling"
    },
    {
      cover: "assets/harry_potter_book.jpg",
      title: "Harry Potter",
      author: "J.K. Rowling"
    },
    {
      cover: "assets/harry_potter_book.jpg",
      title: "Harry Potter",
      author: "J.K. Rowling"
    },
    {
      cover: "assets/harry_potter_book.jpg",
      title: "Harry Potter",
      author: "J.K. Rowling"
    },
    {
      cover: "assets/harry_potter_book.jpg",
      title: "Harry Potter",
      author: "J.K. Rowling"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
