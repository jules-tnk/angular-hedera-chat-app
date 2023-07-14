import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn: boolean = false;
  accountId: string = "";

  login(accountId: string): boolean {
    // You can implement your own authentication logic here
    // For simplicity, let's assume any non-empty accountId is considered valid
    if (accountId) {
      this.loggedIn = true;
      this.accountId = accountId;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.loggedIn = false;
    this.accountId = '';
  }

}
