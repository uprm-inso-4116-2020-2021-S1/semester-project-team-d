import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'BookCard',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})

export class BookCardComponent implements OnInit {

  @Input() cover: string;
  @Input() title: string;
  @Input() author: string;
  @Input() id: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayText() {
    document.getElementById("text-container").style.display = "block"
  }

  goToBookPage() {
    this.router.navigate(['/book', this.id])
  }
}
