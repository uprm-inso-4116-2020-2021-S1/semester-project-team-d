import { Component, HostListener, OnInit } from '@angular/core';
import Tab from '../../classes/Tab'

@Component({
  selector: 'NavBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public tabs: Array<Tab>;
  private innerWidth: number; 
  private options: boolean;

  constructor() { }

  ngOnInit(): void {
    this.tabs = this.createTabs();
    this.innerWidth = window.innerWidth;
    this.options = false;
  }

  // Live update innerWidth property.
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;

    // If hamburger menu options are active, remove them on resize.
    if(!this.onMobile() && this.options)
      this.toggleOptions();
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
        "/home"
      ),
      new Tab(
        "Login/Register",
        "/login"
      ),
      new Tab(
        "MyAccount",
        "/account"
      )
    ]
  }

  // Criteria to decide how to render NavBar.
  onMobile(): boolean {
    // 850px is the established threshold for desktop/mobile devices.
    return this.innerWidth < 850;
  }

  // HbMenu icon event handler
  toggleOptions(): void {
    let icon = document.getElementById("menu-icon"),
        menu_options = document.getElementById("menu-options");

    // menu-options are active
    if(this.options){
      icon["src"]="assets/NavBar/hb_menu_icon.png";
      menu_options.style.display = "none";
    }

    // options are inactive
    else {
      icon["src"]="assets/NavBar/hb_menu_x_icon.png";
      menu_options.style.display = "flex";
    }

    this.options = !this.options;
  }
}
