import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { User } from '../interfaces/User';
import { ResponseCode } from '../interfaces/ResponseCode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

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
  validate(): Observable<ResponseCode> {

    // Http Metadata
    const httpOptions = null;
      
    // Should send a POST request with user object as body and httpOptions.
    return this.http.get<ResponseCode>(this.url + '/login')
      .pipe(catchError(this._handleError));
  }

  // Accepts a user object as a parameter.
  register(): Observable<ResponseCode> {

    // HTTP Metadata
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body' as const,
      responseType: 'json' as const
    };

    // Test data to add. Actual data to add would be User param.
    let body = {
        full_name: "Hector Jimenez",
        password: "Hec371",
        phone: "7329308189",
        email: "hector.jimenez@upr.edu",
        username: "hectordael371"
      }

    return this.http.post<ResponseCode>(this.url + '/register', body, httpOptions)
      .pipe(
        catchError(this._handleError)
      );
    
  }
}
