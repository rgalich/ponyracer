import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ponyracer';

  constructor(private userService: UserService) {
    this.userService.retrieveUser();
  }
}
