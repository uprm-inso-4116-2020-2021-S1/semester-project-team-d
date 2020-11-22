import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  private authenticated: boolean;
  private uuid: string;

  constructor() { 
    this.authenticated = true;
    this.uuid = "589";
  }

  isAuthenticated(): Boolean {
    return this.authenticated;
  }

  getUUID() {
    if (!this.isAuthenticated())
      alert("Must be logged in first.")
    
    else
      return this.uuid;
  }

  openSession(uid: string) {
    this.uuid = uid;
    this.authenticated = true;
  }

  closeSession() {
    this.uuid = null;
    this.authenticated = false;
  }
}
