
import { Component ,  OnInit } from '@angular/core';
import { AuthService } from 'src/app/logowania/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent implements OnInit {
  username: string = '';
  password: string = '';
constructor(){}
ngOnInit(): void {
  
}
  logowanie() {
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('Zalogowano się');
      
    } else {
      console.log('Błąd logowania');
    }
  }
  login() {
    this.AuthService.login();
    this.router.navigate(['/dashboard']);

  }
}

