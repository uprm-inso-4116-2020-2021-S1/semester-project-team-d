import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ResponseCode } from '../../interfaces/ResponseCode';
import { User } from '../../interfaces/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {
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

  // Should accept a User object containing credential and password.
  validate(user: User): Observable<ResponseCode> {
    
    // Should send a POST request with user object as body and httpOptions.
    return this.http.post<ResponseCode>(this.url + '/login', user, this.httpOptions)
      .pipe(catchError(this._handleError)) 
  
  }

  // Accepts a user object as a parameter.
  register(user: User): Observable<ResponseCode>{

    return this.http.post<ResponseCode>(this.url + '/register', user, this.httpOptions)
      .pipe(catchError(this._handleError))
  
  }
}
