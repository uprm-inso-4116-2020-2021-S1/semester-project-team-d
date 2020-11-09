import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LandingPage',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  // should be paired with their list of books
  titles = [
    "Best Sellers",
    "Best Of The Month"
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }
}
