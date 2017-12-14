import { Component } from '@angular/core';
import { AuthenticationService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Magic recipes';
  constructor(
    private authService : AuthenticationService
  ) { }
}
