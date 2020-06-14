import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  changingClasses = { navbarClass: 'navbar', bodyClass: 'body_comp' };
}
