import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  // Base URL.
  public url = "https://book-hub-backend.herokuapp.com";
  
  // HTTP Metadata
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'body' as const,
    responseType: 'json' as const
  };
  
  constructor(private http: HttpClient) { }

  // handler method copied from official Angular website.
  private _handleError(error: HttpErrorResponse | any) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } 
    
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  getLandingBooks() {
    return this.http.get<{}>(this.url + '/')
      .pipe(catchError(this._handleError));
  }

  getHomeBooks() {
    return this.http.get<[]>(this.url + '/home')
      .pipe(catchError(this._handleError));
  }

  getAccountBooks(uuid: string) {
    return this.http.get<{}>(this.url + '/account/' + uuid)
      .pipe(catchError(this._handleError));
  }

  browseBooks(criteria: string) {
    return this.http.get<{}>(this.url + '/browse/' + criteria)
      .pipe(catchError(this._handleError));
  }
}
