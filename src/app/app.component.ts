import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'stackhack-frontend';
  sideNavMode = 'side';
  sideNavOpened = true;
  windowWidth: number;

  constructor(private router: Router) {}

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <= 850) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;

      return;
    }

    this.sideNavMode = 'side';
    this.sideNavOpened = true;

    return;
  }

  openSideNav() {
    this.sideNavOpened = true;
  }

  sideNavItemClick(route: string) {
    this.router.navigate([`/${route}`]);
    if (this.windowWidth <= 850) {
      this.sideNavOpened = false;
    }
  }
}
