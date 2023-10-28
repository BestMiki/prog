
import { Component ,  OnInit } from '@angular/core';

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
}

