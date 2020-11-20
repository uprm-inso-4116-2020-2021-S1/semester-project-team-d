import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'BrowseBooksPage',
  templateUrl: './browse-books-page.component.html',
  styleUrls: ['./browse-books-page.component.css']
})

export class BrowseBooksPageComponent implements OnInit, OnDestroy {
  private sub: any;
  type: string;
  items = {};

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => this.type = params['type'])

    this.bookService.browseBooks(this.type)
      .subscribe(
        response => {
          this.items = response;
        },
        error => alert(error)
      )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  capitalize(sentence: string) {
    // Split sentence using ' ' as delimiter
    let words = sentence.split('\ ');

    // Capitalize first letter of each word
    for(let index in words){
      let word = words[index];
      words[index] = word[0].toUpperCase() + word.slice(1);
    }
    
    // Join words and return
    return words.join(' ');
  }
}
