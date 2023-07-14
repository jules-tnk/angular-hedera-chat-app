import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ACCOUNT_STORAGE_KEY = 'account';
  constructor() { }

  accountInfo = {
    isLoggedIn: false,
    accountId: '',
    privateKey: '',
    publicKey: ''
  }

  login(accountId: string, privateKey: string, publicKey: string): boolean {
    this.accountInfo ={
      isLoggedIn: true,
      accountId: accountId,
      privateKey: privateKey,
      publicKey: publicKey
    }
    this.saveAccountInfoInLocalStorage();
    return true;
  }

  logout(): boolean {
    this.accountInfo = {
      isLoggedIn: false,
      accountId: '',
      privateKey: '',
      publicKey: ''
    }
    this.saveAccountInfoInLocalStorage();
    return true;
  }

  saveAccountInfoInLocalStorage() {
    JSON.stringify(this.accountInfo)
  }

  loadAccountInfoFromLocalStorage() {
    const storedAccountInfo = localStorage.getItem(this.ACCOUNT_STORAGE_KEY);
    if (storedAccountInfo) {
      this.accountInfo = JSON.parse(storedAccountInfo);
    }
  }

  getAccountInfo() {
    this.loadAccountInfoFromLocalStorage();
    return this.accountInfo
  }

}
