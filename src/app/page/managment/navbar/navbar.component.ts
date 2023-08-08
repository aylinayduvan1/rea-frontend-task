import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

    // Eksik olan isLoggedIn() metodu AuthService'den alınarak buraya ekleniyor.
    isLoggedIn(): boolean {
      return this.authService.isLoggedIn();
    
  }
}