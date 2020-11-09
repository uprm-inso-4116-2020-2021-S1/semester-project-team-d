import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  carousels = [
    'By Genre',
    'By Faculty',
    'By Department'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
