import {Component} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  accountId: string = "";
  privateKey: string = "";
  publicKey: string = "";

  constructor(private authService: AuthService, private router: Router) {
  }

  login(): void {
    let loginSuccess: boolean = this.authService.login(this.accountId, this.privateKey, this.publicKey);

    if (loginSuccess) {
      this.router.navigate(['/chat']);
    }else {
      alert("Login failed");
    }
  }

}
