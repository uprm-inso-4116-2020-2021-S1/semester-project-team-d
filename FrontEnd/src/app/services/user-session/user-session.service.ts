import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  constructor(
    private cookieService: CookieService
  ) { }

  isAuthenticated(): boolean {
    return this.cookieService.getAll()["authenticated"] == "true"
  }

  getUUID() {
    return this.cookieService.getAll()["uuid"];
  }

  openSession(uid: string) {
    this.cookieService.set("uuid", uid)
    this.cookieService.set("authenticated", "true")
  }

  closeSession() {
    this.cookieService.deleteAll()
  }
}
