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

  constructor(private authService: AuthService, private router: Router) {
  }

  login(): void {
    if (this.authService.login(this.accountId)) {
      this.router.navigate(['/chat']);
    } else {
      // Handle login failure
    }
  }
}
