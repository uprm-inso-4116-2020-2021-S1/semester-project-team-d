import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'NavTab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.css']
})

export class NavTabComponent implements OnInit {

  @Input() text: string;
  @Input() src: string;

  constructor() { }

  ngOnInit(): void {
  }

}
