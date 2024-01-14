import { Component } from '@angular/core';
import { AuthService } from 'src/app/logowanie/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isLoggedIn = this.authService.isLoggedIn;

  constructor(private authService: AuthService) {}
  pageTitle: string = 'Dashboard';
  userRole: string = 'Admin';

  handleButtonClick(): void {
    console.log('Przycisk został kliknięty!');
  }
}

