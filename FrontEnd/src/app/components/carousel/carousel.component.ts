import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  @Input() title: string;
  @Input() items = [];

  cover = "assets/harry_potter_book.jpg";

  constructor() { }

  ngOnInit(): void {

  }
}
