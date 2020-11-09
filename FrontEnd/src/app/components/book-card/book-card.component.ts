import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'BookCard',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})

export class BookCardComponent implements OnInit {

  @Input() cover: string;
  @Input() title: string;
  @Input() author: string;

  constructor() { }

  ngOnInit(): void {
  }

}
