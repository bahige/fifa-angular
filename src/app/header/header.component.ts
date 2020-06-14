import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  changingClasses = { navbarClass: 'navbar', bodyClass: 'body_comp' };

  counter: number = 0;

  @Output() clickEmitter = new EventEmitter();

  displayNavbar() {
    this.counter++;
    if (this.counter % 2 === 1) {
      this.changingClasses.navbarClass = 'navbar_hide';
      this.changingClasses.bodyClass = 'body_comp_expand';
    } else if (this.counter % 2 === 0) {
      this.changingClasses.navbarClass = 'navbar';
      this.changingClasses.bodyClass = 'body_comp';
    }

    this.clickEmitter.emit(this.changingClasses);
  }

  ngOnInit(): void {}
}
