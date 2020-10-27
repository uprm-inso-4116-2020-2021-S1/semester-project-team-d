import { Component, OnInit } from '@angular/core';
import Tab from '../../classes/Tab'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  tabs = [
    new Tab(
      "About Us",
      ""
    ),
    new Tab(
      "Browse Products",
      ""
    ),
    new Tab(
      "My Account",
      "/login"
    )
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onMobile(): boolean {
    // Method works but not dynamically. Need live updates.
    return true;
    // return document.documentElement.clientWidth > 850;
  }
}
