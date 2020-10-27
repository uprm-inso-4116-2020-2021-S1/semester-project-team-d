import { Component, HostListener, OnInit } from '@angular/core';
import Tab from '../../classes/Tab'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private tabs: Array<Tab>;
  private innerWidth: number; 

  constructor() { }

  ngOnInit(): void {
    this.tabs = this.createTabs();

    this.innerWidth = window.innerWidth;
  }

  // Live update innerWidth property.
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  // Auxilary method to create list of tabs.
  createTabs(): Array<Tab> {
    return [
      new Tab(
        "About Us",
        ""
      ),
      new Tab(
        "Browse Products",
        ""
      ),
      new Tab(
        "Account",
        "/login"
      )
    ]
  }

  // Criteria to decide how to render NavBar.
  onMobile(): boolean {
    // 850px is the established threshold for desktop/mobile devices.
    return this.innerWidth < 850;
  }
}
